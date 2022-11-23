const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  nom: { type: String, require: true },
  prenom: { type: String, require: true },
  date: { type: Date, default: Date.now },
  email: { type: String, unique: true, require: true },
  telephone: { type: Number, require: true },
  numero_commande: { type: Number,unique:true},
  message: { type: String, require: true },
});
const contactModel = mongoose.model("contact", contactSchema);
module.exports = { contactModel };
