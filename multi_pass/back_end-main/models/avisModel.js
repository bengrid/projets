const mongoose = require("mongoose");
const Schema = mongoose.Schema

const avisSchema = new Schema(
    {
        produit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Produits"
        },
        nom: {
            type: String,
            required: true,
        },
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        rating: {
            type: Number,
            required: true,
        },
        ratingp: {
            type: Number,
            required: true,
        },
        ratingq: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        likesAvis: {
            type: Array
        },
        message: {
            type: Array
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    }
)

const avisModel = mongoose.model("Avis", avisSchema);

module.exports = { avisModel };
