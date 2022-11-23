const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom: { type: String, require: true },
    prenom: { type: String, require: true },
    date: { type: Date, default: Date.now },
    email: { type: String, unique: true, require: true },
    panier: { type: Array },
    password: { type: String, require: true },
    role: { type: String, default: 'user' },
    adresse: { type: String, require: true },
    codePostal: { type: String, require: true },
    ville: { type: String, require: true },
    telephone: { type: Number, require: true },
    token: { type: String, require: false },
});
const userModel = mongoose.model('users', userSchema);
module.exports = { userModel };


