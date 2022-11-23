const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodruitSchema = new Schema({
  nom: {
    type: String,
    required: [true, 'Veullez entrer le nom du produit'],
    trim: true,
    text: true,
    maxLength: [100, 'Le nom du produit ne peut pas dépasser 100 caractères']
  },
  price: {
    type: Number,
    maxLength: [5, 'Le nom du produit ne peut pas dépasser 5 caractères'],
    require: [true, 'Veuillez entrer le prix du produit'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Veuillez entrer la description du produit'],
    text: true
  },
  ratings: {
    type: Number,
    default: 0
  },
  categorie: {
    type: String,
    required: true,
    enum: {
      values: [
        'Lenovo',
        'Logitech',
        'Mackbook',
        'HP',
        'DELL',
        'ASUS',
        'Apple',
        'MSI',
        'ACER',
        'Toshiba'
      ]
    }
  },
  systeme: {
    type: String,
    enum: {
      values: [
        'Windows',
        'Mac OS',
        'Linux',
        'Unix',
        'Android',
        'iOS'
      ]
    }
  },
  processeur: {
    type: String,
    enum: {
      values: [
        'AMD Ryzen 5',
        'AMD Rizen 3',
        'AMD Rizen 7',
        'Intel Core i5',
        'Intel Core i3',
        'Intel Core i7',
        'Intel Core i9',
        'AMD Zen 2',
        'AMD Zen 3'
      ]
    }
  },
  ram: {
    type: String,
    enum: {
      values: [
        '4GB',
        '8GB',
        '16GB',
        '32GB',
        '64GB',
        '128GB'
      ]
    }
  },
  stockage: {
    type: String,
    enum: {
      values: [
        '250GB',
        '500GB',
        '600GB',
        '1000GB',
        '125GB',
        '800GB'
      ]
    }
  },
  carte_graphique: {
    type: String,
    enum: {
      values: [
        'NVIDIA GeForce',
        'MSI R5750 PM2D',
        'PNY GeForce',
        'XFX Radeon HD 5850',
        'ATI Radeon 4870 X2'
      ]
    }
  },
  taille_ecran: {
    type: String,
    enum: {
      values: [
        '8 pouces',
        '9 pouces',
        '10 pouces',
        '11 pouces',
        '12 pouces',
        '13 pouces',
        '14 pouces',
        '15 pouces'
      ]
    }
  },
  details: {
    type: String,
    require: true
  },
  fiche_technique: {
    type: Array,
    require: true
  },
  img_produit: {
    type: Array,
    required: true
  }
  ,
  reference: {
    type: String,
    require: true,
    unique: true
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  avis: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Avis'
  }],
  date: {
    type: Date,
    default: Date.now
  },
});
const produitModel = mongoose.model("Produits", prodruitSchema);

module.exports = { produitModel };
