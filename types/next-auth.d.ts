// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser, Profile } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string[] | undefined,
            email: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string[] | undefined,
    }

    interface Profile {
        role: string,
        "cognito:groups": string[] | undefined
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string[] | undefined,
    }
}