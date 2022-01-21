const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const chatController = require('../controllers/chat-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('login'),
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    body('confirmPassword').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/user', authMiddleware, userController.getUsers);
router.get('/start', userController.startPage);
router.get('/friends/:userId', chatController.getFriends)
router.put('/:id/follow', chatController.addFriend);
router.post('/messages', chatController.addMessage)
router.get('/messages/:conversationId', chatController.getMessages)
router.post('/conversation', chatController.newConversation)
router.get('/conversation/:userId', chatController.getConversationOfUser)
router.get('/conversation/find/:firstUserId/:secondUserId', chatController.getConversationOfTwoUser)
router.get('/user/get', userController.getUser)

module.exports = router
