const TeacherModel = require('../../Model/TeacherModel/TeacherAuthModel');
const bcrypt = require('bcrypt');
const { responseReturn } = require('../../Utils/response');
const { createToken } = require('../../Utils/tokenCreate');

class AuthControllers {
    // Teacher login handler
    teacherLogin = async (req, res) => {
        const { email, password } = req.body;

        try {
            // Find teacher by email and select the password field explicitly
            const teacher = await TeacherModel.findOne({ email }).select('+password');
            
            if (!teacher) {
                return responseReturn(res, 404, { error: "Email not found" });
            }

            // Compare the provided password with the hashed password in the database
            const isPasswordCorrect = await bcrypt.compare(password, teacher.password);

            if (!isPasswordCorrect) {
                return responseReturn(res, 401, { error: "Incorrect password" });
            }

            // Create a token for the authenticated user
            const token = createToken({
                id: teacher.id,
                role: teacher.role
            });

            // Set a cookie with the token, expiring in 7 days
            res.cookie('accessToken', token, {
                httpOnly: true, // Protect cookie from being accessed by client-side scripts
                secure: process.env.NODE_ENV === 'production', // Ensure secure flag is set in production
                sameSite: 'Strict', // Protect against CSRF attacks
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });

            // Send a successful response with the token
            responseReturn(res, 200, { token, message: 'Login successful' });

        } catch (error) {
            // Handle unexpected errors
            console.error('Error during teacher login:', error.message);
            responseReturn(res, 500, { error: "Internal server error" });
        }
    };
}

module.exports = new AuthControllers();
