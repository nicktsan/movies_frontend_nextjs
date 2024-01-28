"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700"
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700"
function AuthButton() {
    const { data: session } = useSession();
    //if there is a session, there is an option to sign out of the current session
    if (session) {
        // //console.log(session)
        return (
            <>
                Signed in as {session?.user?.email} with {session?.user?.role} role <br />
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

function UploadMovie() {
    const { data: session } = useSession();
    const pathname = usePathname();
    //if there is a session, there is an option to sign out of the current session
    if (session && session?.user?.role?.find((element) => element === 'admin')) {
        // //console.log(session)
        return (
            <Link href="/UploadMovies">
                <li className={pathname === "/UploadMovies" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Upload Movies
                </li>
            </Link>
        );
    }
    //otherwise, there is no session, and there is an option to sign in to a user.
    return null
}

export default function NavMenu() {
    const pathname = usePathname();
    return (
        <div>
            <AuthButton />
            <hr className="my-4" />
            <ul>
                <Link href="/">
                    <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Search Movies
                    </li>
                </Link>
                <Link href="/mymovies">
                    <li
                        className={
                            pathname === "/mymovies" ? ACTIVE_ROUTE : INACTIVE_ROUTE
                        }
                    >
                        My Movies
                    </li>
                </Link>
                <UploadMovie />
            </ul>
        </div>
    );
}