const Router = require('express').Router();
const {registerUser} = require('../controllers/user_controller.js')

Router.route('/register').post(registerUser)

module.exports = Router