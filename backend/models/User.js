const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Job Seeker', 'Employer'], required: true },
    profile: {
        bio: { type: String },
        skills: { type: String },
        resume: { type: String },
        resumeName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        photo: { type: String, default: "" },
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
