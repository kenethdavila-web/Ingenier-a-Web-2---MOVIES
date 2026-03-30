const { Schema, model } = require("mongoose");

const MediaSchema = Schema({

  serial: {
    type: String,
    required: true,
    unique: true
  },

  titulo: {
    type: String,
    required: true
  },

  sinopsis: {
    type: String
  },

  url: {
    type: String,
    required: true,
    unique: true
  },

  imagen: {
    type: String
  },

  anioEstreno: {
    type: Number
  },

  genero: {
    type: Schema.Types.ObjectId,
    ref: "genero",
    required: true
  },

  director: {
    type: Schema.Types.ObjectId,
    ref: "director",
    required: true
  },

  productora: {
    type: Schema.Types.ObjectId,
    ref: "productora",
    required: true
  },

  tipo: {
    type: Schema.Types.ObjectId,
    ref: "tipo",
    required: true
  },

  fechaCreacion: {
    type: Date,
    default: Date.now
  }

});

module.exports = model("media", MediaSchema);