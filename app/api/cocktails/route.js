import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";

export const GET = async (req, res) => {
  try {
    await connectToDatabase();
    const cocktails = await Cocktail.find({});
    return new Response(JSON.stringify(cocktails), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};