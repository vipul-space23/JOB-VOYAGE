const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', reuired: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', reuired: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
