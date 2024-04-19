import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId:
    //     "642890051651-gqsittfknisub81k6gfs7ce4m4ujbr0e.apps.googleusercontent.com",
    //   clientSecret: "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",
    // }),
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
