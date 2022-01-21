const User = require('../models/user-model');
const Conversation = require('../models/conversation-model');
const Message = require('../models/message-model');

class ChatController {
    getFriends = async (req, res) => {
        try {
            const user = await User.findOne({_id: req.params.userId});
            console.log(user._id)
            console.log(user.followings)
            let friendList = []
            user.followings.map((friend) => {
                const { id, login } = friend
                console.log(id, login, "AAA")
                friendList.push({ id, login })
            })
            res.status(200).json(friendList)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    addFriend = async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
              const user = await User.findById(req.params.id);
              const currentUser = await User.findById(req.body.userId);
              if (!user.followers.some(item => item.id === req.body.userId)) {
                await user.updateOne({ $push: { followers: {id: req.body.userId, login: req.body.loginCurrent} } });
                await user.updateOne({ $push: { followings: {id: req.body.userId, login: req.body.loginCurrent} } });
                await currentUser.updateOne({ $push: { followings: {id: req.params.id, login: req.body.login} } });
                await currentUser.updateOne({ $push: { followers: {id: req.params.id, login: req.body.login} } });
                res.status(200).json("user has been added");
              } else {
                res.status(403).json("you allready add this user");
              }
            } catch (err) {
              res.status(500).json(err);
            }
          } else {
            res.status(403).json("you cant add yourself");
          }
    }

    newConversation = async (req, res) => {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
          });
        
          try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    getConversationOfUser = async (req, res) => {
        try {
            const conversation = await Conversation.find({
              members: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    getConversationOfTwoUser = async (req, res) => {
        try {
            console.log('11')
            const conversation = await Conversation.findOne({
              members: { $all: [req.params.firstUserId, req.params.secondUserId] },
            });
            console.log(conversation)
            res.status(200).json(conversation)
          } catch (err) {
            res.status(500).json(err);
          }
    }

    addMessage = async (req, res) => {
        const newMessage = new Message(req.body);

        try {
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    getMessages = async (req, res) => {
        try {
            console.log(req.params.conversationId)
            const messages = await Message.find({
              conversationId: req.params.conversationId,
            });
            console.log(messages, "AA")
            res.status(200).json(messages);
          } catch (err) {
            res.status(500).json(err);
          }
    }
}


module.exports = new ChatController();
