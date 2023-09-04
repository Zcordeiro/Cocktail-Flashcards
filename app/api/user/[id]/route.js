import { connectToDatabase } from "@/utils/database";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const user = await User.findById(params.id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { username, password, email, role } = await req.json();
  let hashedPassword;

  if (password) {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  }

  try {
    await connectToDatabase();
    const user = await User.findByIdAndUpdate(params.id, {
      username,
      password: hashedPassword,
      email,
      role,
    });
    await user.save();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();
    const user = await User.findByIdAndDelete(params.id);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
