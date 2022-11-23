const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { commandeModel } = require("../models/commandeModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// payment methode => http://localhost:3001/api/payment
router.post("/payment", async (req, res) => {
  let { amount, id } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "PC building",
      payment_method: id,
      confirm: true
    })
    console.log("Payment", payment)
    res.json({
      message: "Payment successful",
      success: true
    })
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})
// poster un cmmande => http://localhost:3001/api/commande
router.post("/commande", (req, res) => {
  const newCommande = new commandeModel({
    userid: req.body.userid,
    id_produit: req.body.id_produit,
    numero_commande: req.body.numero_commande,
    prix_total: req.body.prix_total

  });
  newCommande.save((err, data) => {
    if (!err) res.send(data);
    else console.log("error :" + err);
  });
});

router.get("/listecommande", (req, res) => {
  commandeModel.find((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log("error :" + err);
    }
  });
});
router.get("/usercommande/:id", (req, res) => {
  commandeModel.findOne({ id_client: req.params.id }, (err, data) => {
    res.send(data);
  });
});
module.exports = router;
