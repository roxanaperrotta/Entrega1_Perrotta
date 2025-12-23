import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  species: {
    type: String,
    required:true
  }

});

export const Pet = mongoose.model("Pet", petSchema);