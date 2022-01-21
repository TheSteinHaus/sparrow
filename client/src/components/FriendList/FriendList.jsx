import React, {useState} from "react";
import axios from "axios";
import Friend from "../Friend/Friend";
import './FriendList.scss'

const api = axios.create({
    baseURL: `http://localhost:5000/api`
})

function FriendList(props) {
    const [name, setName] = useState('')
    const user = props.user

    return (
        <div className="friendList">
            <input onChange={e => setName(e.target.value)} value={name}></input>
            <button type="submit" onClick={async () => {
                let newFriend = await api.get(`/user/get?username=${name}`)
                console.log(newFriend.data.id)
                console.log(user.id)
                await api.put(`/${newFriend.data.id}/follow`, {userId: user.id, login: newFriend.data.login, loginCurrent: user.login})
            }} >Добавить друга</button>
            {props.friends.map((friend) => 
                <Friend key={friend.id} setFriendId={props.setFriendId} friendId={friend.id} setCurrentChat={props.setCurrentChat} login={friend.login} userId={user.id} />
            )}
        </div>
    );
}

export default FriendList;