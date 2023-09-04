import { connectToDatabase } from "@/utils/database";
import User from "@/models/User";

export const POST = async (req) => {
  const { username, password, email, role } = await req.json();

  try {
    await connectToDatabase();
    const user = await User.create({
      username,
      password,
      email,
      role,
    });
    await user.save();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
