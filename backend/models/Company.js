const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, reuired: true },
    description: { type: String },
    website: { type: String },
    location: { type: String ,reuired: true, unique: true },
    logo: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);
