"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {
    const { data: session } = useSession();
    //if there is a session, there is an option to sign out of the current session
    if (session) {
        console.log(session)
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    //otherwise, there is no session, and there is an option to sign in to a user.
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}