import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const cocktail = await Cocktail.findById(params.id);
    return new Response(JSON.stringify(cocktail), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const {
    name,
    alternateName,
    mainLiquor,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7,
    ingredient8,
    ingredient9,
    ingredient10,
    ingredientAmount1,
    ingredientAmount2,
    ingredientAmount3,
    ingredientAmount4,
    ingredientAmount5,
    ingredientAmount6,
    ingredientAmount7,
    ingredientAmount8,
    ingredientAmount9,
    ingredientAmount10,
    instructions,
    image,
    flavorTags,
    approved,
    creator,
  } = await req.json();

  try {
    await connectToDatabase();
    const cocktail = await Cocktail.findByIdAndUpdate(params.id, {
      name,
      alternateName,
      mainLiquor,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
      ingredientAmount1,
      ingredientAmount2,
      ingredientAmount3,
      ingredientAmount4,
      ingredientAmount5,
      ingredientAmount6,
      ingredientAmount7,
      ingredientAmount8,
      ingredientAmount9,
      ingredientAmount10,
      instructions,
      image,
      flavorTags,
      approved,
      creator,
    });
    await cocktail.save();
    return new Response(JSON.stringify(cocktail), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();
    const cocktail = await Cocktail.findByIdAndDelete(params.id);
    return new Response(JSON.stringify(cocktail), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
