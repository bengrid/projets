const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { produitModel } = require("../models/produitModel");
const { avisModel } = require("../models/avisModel")

// poster un produit => http://localhost:3001/api/produit
router.post("/produit", (req, res) => {
  const newProduit = new produitModel({
    nom: req.body.nom,
    details: req.body.details,
    price: req.body.price,
    description: req.body.description,
    ratings: req.body.ratings,
    categorie: req.body.categorie,
    systeme: req.body.systeme,
    processeur: req.body.processeur,
    ram: req.body.ram,
    stockage: req.body.stockage,
    carte_graphique: req.body.carte_graphique,
    taille_ecran: req.body.taille_ecran,
    numOfReviews: req.body.numOfReviews,
    avis: req.body.avis,
    fiche_technique: req.body.fiche_technique,
    img_produit: req.body.img_produit,
    reference: req.body.reference,

  });
  newProduit.save((err, data) => {
    if (!err) res.send(data);
    else console.log("error :" + err);
  });
});

//get all produits => http://localhost:3001/api/listeproduit
router.get("/listeproduit", (req, res) => {
  produitModel.find()
    .populate('avis')
    .exec()
    .then(docs => {
      res.status(200).json(docs
      );
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

//get details produits => http://localhost:3001/api/produit/:id

router.get("/produit/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  produitModel.findById(req.params.id)
    .populate('avis')
    .then(docs => {
      res.status(200).json(docs
      );
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  ;
});

//get  produits search => http://localhost:3001/api/rech/:keyword

router.get("/rech/:keyword", (req, res) => {
  const keyword = req.params.keyword ? {
    nom: {
      $regex: req.params.keyword,
      $options: "i",
    },
  }
    : {}
  if (!(req.params.keyword))
    return res.status(400).send("Nom unknow : " + req.params.keyword)
  produitModel.find({ ...keyword })
    .populate('avis')
    .then(docs => {
      res.status(200).json(docs
      );
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  ;
});


//update modifier un produit => http://localhost:3001/api/produit/:id
router.put("/produit/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)

  const updateRecord = {
    nom: req.body.nom,
    details: req.body.details,
    price: req.body.price,
    description: req.body.description,
    ratings: req.body.ratings,
    categorie: req.body.categorie,
    systeme: req.body.systeme,
    processeur: req.body.processeur,
    ram: req.body.ram,
    stockage: req.body.stockage,
    carte_graphique: req.body.carte_graphique,
    taille_ecran: req.body.taille_ecran,
    numOfReviews: req.body.numOfReviews,
    avis: req.body.avis,
    fiche_technique: req.body.fiche_technique,
    img_produit: req.body.img_produit,
    reference: req.body.reference,
  };
  produitModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )

});
//   AVIS SUR LES PRODUITS //

router.post("/produit/avis", (req, res) => {
  produitModel.findById(req.body.produit)
    .then(produit => {
      if (!produit) {
        return res.status(404).json({
          message: "Le produit n'existe pas"
        });
      }
      const avis = new avisModel(req.body);
      return avis.save();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

})


// get avis produit => "http://localhost:3001/api/produit/avis/:produitId"
router.get("/avis/:produitId", (req, res) => {
  avisModel.find({ "produit": req.params.produitId, "isActive": true })
    .populate('produit')
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});
// get likes avis  => "http://localhost:3001/api/avis/likes/:avisId"
router.get("/avis/likes/:avisId", (req, res) => {
  avisModel.find({ "_id": req.params.avisId, "isActive": true })

    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Supp  commentaire => "http://localhost:3001/api/produit/avis/drop"
router.put("/produit/avis/drop", (req, res) => {
  if (!ObjectID.isValid(req.body.avisId), !req.body.userId)
    return res.status(406).send("ID unknow : " + req.body.id + req.body.userId)
  avisModel.findOneAndUpdate({ _id: req.body.avisId },
    { isActive: false },
    {
      new: true
    })
    .exec(
      (err, docs) => {
        if (err) {
          return res.status(426).json({ error: err })
        } else {
          res.json(docs)
        }
      }
    )
}
);


// LIKES & UNLIKES SUR UN AVIS //

// Likes pour les avis => "http://localhost:3001/api/produit/avis/likes"
router.put("/produit/avis/likes", (req, res) => {
  const id = req.body.userId;
  try {
    avisModel.findById(req.body.avisId)
      .then(avis => {
        if (!avis.likesAvis.includes(req.body.userId)) {
          avisModel.findOneAndUpdate({ _id: req.body.avisId }, { $push: { likesAvis: req.body.userId } },
            {
              new: true
            }
          ).exec();

        }
        else {
          avisModel.findOneAndUpdate({ _id: req.body.avisId }, { $pull: { likesAvis: req.body.userId } },
            {
              new: true
            }
          ).exec();

        }
      }
      )

  } catch (err) {
    res.status(500).json(err);
  }
}
);

// unlikes likesavis => "http://localhost:3001/api/produit/avis/unlikes"
router.put("/produit/avis/unlikes", (req, res) => {
  if (!ObjectID.isValid(req.body.id), !req.body.userId)
    return res.status(400).send("ID unknow : " + req.body.id + req.body.userId)
  avisModel.findOneAndUpdate({ _id: req.body.avisId },
    { $pull: { likesAvis: { userId: req.body.userId, _id: req.body._id } } },
    {
      new: true
    }
  )
    .exec(
      (err, docs) => {
        if (err) {
          return res.status(422).json({ error: err })
        } else {
          res.json(docs)
        }
      }
    )
}
);


module.exports = router;
