const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const retourSchema = new Schema({
    id_client: { type: String, require: true },
    id_produit: { type: String, require: true },
    date: { type: Date, default: Date.now },
    motif: { type: String,require: true },
    suivi: { type: Array, require: true },
    
  });
  const retourModel = mongoose.model("retour", retourSchema);
  module.exports = { retourModel };
  