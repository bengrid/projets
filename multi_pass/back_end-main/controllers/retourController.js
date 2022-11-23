const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { retourModel } = require("../models/retourModel");

router.post("/retour", (req, res) => {
  const newRetour = new retourModel({
    id_client: req.body.id_client,
    id_produit: req.body.id_produit,
    date: req.body.date,
    motif: req.body.motif,
    suivi: req.body.suivie,
  });
  newRetour.save((err, data) => {
    if (!err) res.send(data);
    else console.log("error :" + err);
  });
});

router.get("/listeretour", (req, res) => {
  retourModel.find((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log("error :" + err);
    }
  });
});

router.get("/userretour/:id", (req, res) => {
  retourModel.find({ id_client: req.params.id }, (err, data) => {
    res.send(data);
  });
});

module.exports = router;
