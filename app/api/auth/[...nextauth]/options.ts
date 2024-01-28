import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
// import CredentialsProvider from 'next-auth/providers/credentials'
import { CognitoProfile } from "next-auth/providers/cognito";

export const options: NextAuthOptions = {
    providers: [
        CognitoProvider({
            profile(profile: CognitoProfile) {
                // console.log("profile in CognitoProvider")
                // console.log(profile)
                return {
                    ...profile,
                    role: profile["cognito:groups"] ?? ["user"],
                    id: profile.sub,
                }
            },
            clientId: process.env.COGNITO_CLIENT_ID as string,
            clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
            issuer: process.env.COGNITO_ISSUER
        })
    ],
    //refer to https://www.youtube.com/watch?v=ay-atEUGIc4
    //refer to https://github.com/gitdagray/next-auth-role-based/blob/main/src/app/api/auth/%5B...nextauth%5D/options.ts
    //refer to https://gist.github.com/arihant-jain-09/d2e9c4b0c7b0c0d0f96ea2e27b9338aa
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user, profile }) {
            if (user) {
                // console.log("profile in jwt")
                // console.log(profile)
                token.role = profile?.["cognito:groups"] ?? ["user"]
            }

            return token
        },
        // async jwt({ token, account, profile }) {
        //     if (account) {
        //         console.log("Account exists");
        //         // modify token
        //         token.role = profile["cognito:groups"];
        //     }
        //     return token;
        // },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) {
                // console.log("token in session")
                // console.log(token)
                session.user.role = token.role ?? ["user"]
            }
            return session
        },

        // async session({ session, token }) {
        //     if (session.user) {
        //         // modify session
        //         session.user.roles = token.role;
        //     }
        //     return session;
        // },
    }
}