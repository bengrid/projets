const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { userModel } = require('../models/userModel');
const nodeoutlook = require('nodejs-nodemailer-outlook');
require('dotenv').config();

router.post(
    '/register',
    asyncHandler(async (req, res) => {
        try {
            const email = req.body.email; // recupere l'email
            const userExixts = await userModel.findOne({ email }); // recherche si email existe deja
            if (userExixts) {
                res.status(400);
                throw new Error('utilisateur existe deja');
            }
            {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                const newUser = new userModel({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    date: req.body.date,
                    email: req.body.email,
                    panier: req.body.panier,
                    password: hashedPassword,
                    role: req.body.role,
                    adresse: req.body.adresse,
                    codePostal: req.body.codePostal,
                    ville: req.body.ville,
                    telephone: req.body.telephone,
                });
                newUser.save((err, data) => {
                    if (!err) res.send(data);
                    else console.log('error :' + err);
                });
            }
        } catch {
            res.status(500).send();
        }
    }),
);

router.get('/listeuser', (req, res) => {
    userModel.find((err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log('error :' + err);
        }
    });
});

router.post('/authenticate', (req, res) => {
    userModel.findOne({ email: req.body.email }).then((dbUser) => {
        if (!dbUser) {
            res.json({ message: 'Email incorect ou Mot de passe incorect' });
        }
        bcrypt.compare(req.body.password, dbUser.password).then((isCorrect) => {
            if (isCorrect) {
                const payload = {
                    id: dbUser._id,
                    nom: dbUser.nom,
                    prenom: dbUser.prenom,
                    email: dbUser.email,
                    telephone: dbUser.telephone,
                    adresse: dbUser.adresse,
                    codePostal: dbUser.codePostal,
                    ville: dbUser.ville,
                    auth: dbUser.role,
                };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '30d' },
                    (err, token) => {
                        if (err) return res.json({ message: err });
                        return res.json({ message: 'Success', token: token });
                    },
                );
            } else {
                return res.json({ message: 'Email incorect ou Mot de passe incorect' });
            }
        });
    });
});
router.get('/infoUser/:id', (req, res) => {
    userModel.findOne({ _id: req.params.id }, (err, data) => {
        res.send(data);
    });
});

// Modal mdp oublié
router.post(
    '/forgetPasswordModal',
    asyncHandler(async (req, res) => {
        try {
            const email = req.body.email; // recupere l'email

            const userExixts = await userModel.findOne({ email }); // recherche si email existe deja

            if (userExixts) {
                //creation du token
                const payload = {
                    id: userExixts._id,
                    nom: userExixts.nom,
                    prenom: userExixts.prenom,
                    email: userExixts.email,
                    telephone: userExixts.telephone,
                    adresse: userExixts.adresse,
                    codePostal:userExixts.codePostal,
                    ville:userExixts.ville,
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: '1800s',
                });
                //ajout token en bdd
                userExixts.token = token;
                userExixts.save();
                //fin du token

                //creation du mail
                nodeoutlook.sendEmail({
                    auth: {
                        user: process.env.USER_MAIL,
                        pass: process.env.PASSWORD_MAIL,
                    },

                    from: 'Pcbuilding59@outlook.com',
                    to: `${req.body.email}, "Pcbuilding59@outlook.com`,
                    subject: 'PC Building - Mot de passe oublié',
                    html: `
                  <h3>Mot de passe oublié</h3>
                
                    ${userExixts.prenom} ${userExixts.nom}, vous venez de demander la réinitialisation de votre mot de passe</br>
                    Veuillez cliquer sur le lien suivant pour accéder à la modification de votre mot de passe : 
                    <a href=http://localhost:3000/forgetPassword/${token}> Cliquez ici pour changer votre mot de passe</a>`,
                    text: 'This is text version!',
                    replyTo: '',

                    onError: (e) => console.log(e),
                    onSuccess: (i) => res.status(200).send('Email envoyé'),
                });
            } else {
                res.status(400);
                throw new Error('Adresse mail inexistante');
            }
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }),
);

//mdp oublié
router.post(
    '/forgetPasswordValidate',
    asyncHandler(async (req, res) => {
        try {
            const token = req.body.token;

            const user = userModel.findOne({ token });
            // recherche token existe

            if (!user) {
                res.status(400);
                throw new Error('Mauvaise identification de votre compte client');
            } else {
                const salt = await bcrypt.genSalt(); //utilisation de bcrypt
                const hashedPassword = await bcrypt.hash(req.body.password, salt); //utilisation de bcrypt
                user.then((user) => {
                    user.password = hashedPassword;
                    user.save();
                    res.status(200).send();
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }),
);

module.exports = router;
