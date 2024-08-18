const router = require('express').Router()
//const { authMiddleware } = require('../Middleware/authmiddleware');
const authControllers = require('../Controller/TeacherController/TeacherAuthController');

router.post('/teacher-login', authControllers.teacherLogin);


//router.get('/logout',authMiddleware,authControllers.logout)

module.exports = router