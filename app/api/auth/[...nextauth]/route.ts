import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID ?? "blah",
            clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "blah",
            issuer: process.env.COGNITO_ISSUER
        })
    ]
}
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }