import NextAuth from "next-auth"
import { options } from './options'

// export const authOptions: NextAuthOptions = {
//     providers: [
//         CognitoProvider({
//             clientId: process.env.COGNITO_CLIENT_ID ?? "blah",
//             clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "blah",
//             issuer: process.env.COGNITO_ISSUER
//         })
//     ],
//     callbacks: {
//         jwt({ token, account, profile }) {
//             if (account) {
//                 console.log("Account exists");
//                 // modify token
//                 token.role = profile?.role;
//             }
//             return token;
//         },

//         session({ session, token }) {
//             if (session.user) {
//                 // modify session
//                 session.user.roles = token.role;
//             }
//             return session;
//         },
//     },
// }

const handler = NextAuth(options)
export { handler as GET, handler as POST }