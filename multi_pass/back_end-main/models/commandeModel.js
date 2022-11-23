const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  id_produit: {
    type: Object,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  numero_commande: {
    type: String,
    unique: true,
    require: true
  },
  prix_total: {
    type: Number,
    require: true
  },
  suivie: {
    type: String,
    require: true,
    default: 0
  },
  isActive: {
    type: Boolean,
    require: true,
    default: true
  },
  etatCommande: {
    type: Number,
    require: true,
    default: 0
  },
});
const commandeModel = mongoose.model("commandes", commandeSchema);
module.exports = { commandeModel };
