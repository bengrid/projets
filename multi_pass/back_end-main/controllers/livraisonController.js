const express = require('express');
const { livraisonModel } = require('../models/livraisonModel');
const router = express.Router();


router.get('/delivery', (req, res) => {
    livraisonModel
        .find()
        .exec()
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});

module.exports = router;
