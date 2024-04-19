import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
        // check if a user is already logged in
        // if not, create a new

        return true
    } catch (error) {
        console.log(error);
        return false
    }
  },
});

export { handler as GET, handler as POST };
