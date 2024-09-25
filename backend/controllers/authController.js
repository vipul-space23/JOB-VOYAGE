const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { use } = require('../routes/authRoutes');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { fullname, email, number, password, role } = req.body;
        if (!fullname || !email || !number || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exist with this email.",
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullname, email, number, password: hashedPassword, role });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        };

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id, fullname: user.fullname, email: user.email, number: user.number, role: user.role, profile: user.profile
        }
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: 'Welcome back ${user.name)',
            user,
            success: true
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { fullname, email, number, bio, skills } = req.body;
        const file = req.file;

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }
        const userId = req.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        if (fullname) user.fullname = fullname
        if (email) user.email = email
        if (number) user.number = number
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillsArray

        await user.save();
        user = { _id: user._id, fullname: user.fullname, email: user.email, number: user.number, role: user.role, profile: user.profile }
        return res.status(200).json({
            message: "Profile updated successfully.",
            user,
            success: true
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
