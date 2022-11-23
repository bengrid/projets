const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livraisonSchema = new Schema({
nom: { type: String, require: true },
price: { 
    type: Number,
    maxLength: [5, 'Le prix de la livraison ne peut pas dépasser 5 caractères'],
    trim: true
  },
});

const livraisonModel = mongoose.model("Livraison", livraisonSchema);

module.exports = { livraisonModel };
