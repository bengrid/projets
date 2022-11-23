const express = require('express');
const app = express();
const cors = require('cors');
const produit = require('./controllers/produitController');
const commande = require('./controllers/commandeController');
const user = require('./controllers/userController');
const contact = require('./controllers/contactController');
const retour = require('./controllers/retourController');
const livraison = require('./controllers/livraisonController');
require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// Import all routes
app.use('/api', produit);
app.use('/api', commande);
app.use('/api', user);
app.use('/api', contact);
app.use('/api', retour);
app.use('/api', livraison);
app.listen(3001, () => console.log('server stated:3001'));
