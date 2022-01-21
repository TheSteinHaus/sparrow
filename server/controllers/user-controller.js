const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');
const User = require('../models/user-model')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {login, email, password, confirmPassword} = req.body;
            const userData = await userService.registration(login, email, password, confirmPassword);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async startPage(req, res, next) {
        try {
            res.startPage
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        const userId = req.query.userId;
        const username = req.query.username;
        try {
            const user = userId
            ? await User.findById(userId)
            : await User.findOne({ username: username });
            const { password, updatedAt, ...other } = user._doc;
            res.status(200).json(other);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getUser(req, res) {
        const username = req.query.username;
        console.log(username)
        try {
            console.log("AA")
            const user = await User.findOne({ login: username })
            console.log("BB")
            const idLog = {id: user._id, login: user.login}
            console.log(idLog);
            res.status(200).json(idLog)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}


module.exports = new UserController();
