const { Schema, model, models } = require("mongoose");

const cocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  alternateName: {
    type: String,
  },
  mainLiquor: {
    type: String,
    required: true,
  },
  ingredient1: {
    type: String,
    required: true,
  },
  ingredient2: {
    type: String,
    required: true,
  },
  ingredient3: {
    type: String,
  },
  ingredient4: {
    type: String,
  },
  ingredient5: {
    type: String,
  },
  ingredient6: {
    type: String,
  },
  ingredient7: {
    type: String,
  },
  ingredient8: {
    type: String,
  },
  ingredient9: {
    type: String,
  },
  ingredient10: {
    type: String,
  },
  ingredientAmount1: {
    type: String,
    required: true,
  },
  ingredientAmount2: {
    type: String,
    required: true,
  },
  ingredientAmount3: {
    type: String,
  },
  ingredientAmount4: {
    type: String,
  },
  ingredientAmount5: {
    type: String,
  },
  ingredientAmount6: {
    type: String,
  },
  ingredientAmount7: {
    type: String,
  },
  ingredientAmount8: {
    type: String,
  },
  ingredientAmount9: {
    type: String,
  },
  ingredientAmount10: {
    type: String,
  },
  instructions: {
    type: String,
  },
  flavorTags: [{ type: String, required: true }],
  image: {
    type: String,
  },
  top: {
    type: Boolean,
    default: true,
  },
  approved: {
    type: Boolean,
    default: false,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Cocktail = models.Cocktail || model("Cocktail", cocktailSchema);

module.exports = Cocktail;
