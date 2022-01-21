import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Friends from "../Friends/Friends";

const api = axios.create({
    baseURL: `http://localhost:5000/api`
})

export default function Messenger({user}, props) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [friends, setFriends] = useState([]);
  const [friendId, setFriendId] = useState('')
  const socket = useRef();
//   const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user.id);
  }, [user]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
      console.log(currentChat)
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await api.get("/conversation/" + user.id);
        console.log(res.data)
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id]);

  const getMessages = async () => {
    try {
      // const convId = JSON.parse(localStorage.getItem('conversation')) !== null ? JSON.parse(localStorage.getItem('conversation'))._id : null
      const convId = currentChat !== null ? currentChat._id : null 
      console.log(convId)
      if (convId === null) {
        setMessages([])
        console.log(friendId, "BBBBBBBB")
        await api.post('/conversation', {senderId: user.id, receiverId: friendId})
      } else {
        const res = await api.get("/messages/" + convId);
        console.log(res);
        setMessages(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    const getFriends = async () => {
        console.log(user.id)
        const res = await api.get("/friends/" + user.id)
        setFriends(res.data)
    }
    getFriends();
}, [props.currentId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.id
    );

    socket.current.emit("sendMessage", {
      senderId: user.id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await api.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    {console.log(user)}
    <Friends key={user.id} setFriendId={setFriendId} handleSubmit={handleSubmit} setNewMessage={setNewMessage} newMessage={newMessage} setCurrentChat={setCurrentChat} user={user} messages={messages} currentId={user.id} friends={friends} />
    </>
  );
}