import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDatabase } from "@/utils/database";
import User from "@/models/User";
import bcrypt from "bcrypt";


const options = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({ username: credentials.username });
                    if(user && await bcrypt.compare(credentials.password, user.password)) {
                        return user;
                    } else {
                        console.log("Login failed due to incorrect credentials");
                        throw new Error("Login failed");
                } 
                } catch (error) {
                    throw new Error("Login failed");
                }
            },
        }),
    ],
};

const handler = (req, res) => NextAuth(req, res, options);

export { handler as GET, handler as POST}