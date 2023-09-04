import { connectToDatabase } from "@/utils/database";
import User from "@/models/User";

export const GET = async (req, res) => {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
