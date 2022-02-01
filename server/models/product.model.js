const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "el título es requerido"],
        minlength: [2, "E título debe tener al menos 2 caracteres"]
    },

    price: {
        type: Number,
        required: [true, "El precio es requerido"],
        min: [1, "El precio debe ser al menos 1"]
    },

    description: {
        type: String,
        required: [true, "La descripción es requerido"],
        minlength: [5, "La descripción debe tener al menos 5 caracteres"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;