const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, reuired: true },
    description: { type: String, reuired: true },
    requirements: { type: String },
    salary: { type: Number, reuired: true },
    experienceLevel: { type: Number, required: true },
    location: { type: String, reuired: true },
    jobType: { type: String, reuired: true },
    position: { type: Number, reuired: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', reuired: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', reuired: true },
    applications: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
