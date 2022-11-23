const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const nodemailer = require('nodemailer');
const { contactModel } = require("../models/contactModel");

router.post("/contact", (req, res) => {
  const newContact = new contactModel({
    nom: req.body.nom,
    prenom: req.body.prenom,
    date: req.body.date,
    email: req.body.email,
    telephone: req.body.telephone,
    numero_commande: req.body.numero_commande,
    message: req.body.message,
  });

  newContact.save((err, data) => {
    if (!err) res.send(data);
    else console.log("error :" + err);
  });

  const stmpTransporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    service: 'hotmail',
    auth: {
      user: 'Pcbuilding59@outlook.com',
      pass: 'PCbuilding123@'
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  const mailOptions = {
    from: 'Pcbuilding59@outlook.com',
    to: `${req.body.email}, "Pcbuilding59@outlook.com"`,
    subject: `PC Building`,
    html: `
    <h3>Informations</h3>
    <ul>
      <li>Nom: ${req.body.nom}</li>
      <li>Prenom: ${req.body.prenom}</li>
      <li>Email: ${req.body.email}</li>
      <li>Téléphone: ${req.body.telephone}</li>
      <li>Numéro de commande: ${req.body.numero_commande}</li>
    </ul>

    <h3>Message</h3>
    <p>${req.body.message}</p>`
  };

  stmpTransporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log("eror", error);
    } else{
      console.log('Email sent: ' + info);
    }
  });
  
  stmpTransporter.close();
});

router.get("/listecontact", (req, res) => {
  contactModel.find((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log("error :" + err);
    }
  });
});


module.exports = router;
