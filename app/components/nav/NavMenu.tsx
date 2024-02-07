"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700"
const INACTIVE_ROUTE = "py-1 px-2 hover:text-gray-300 hover:bg-gray-700"
const DEFAULT_TEXT_SETTINGS = "py-1 px-2"
function AuthButton() {
    const { data: session } = useSession();
    //if there is a session, there is an option to sign out of the current session
    if (session) {
        // //console.log(session)
        return (
            <div className={DEFAULT_TEXT_SETTINGS}>
                <p>Signed in as</p>
                <p> {session?.user?.email} </p>
                <p>with {session?.user?.role} role </p>
                <br />
                <button className={INACTIVE_ROUTE} onClick={() => signOut()}>Sign out</button>
            </div>
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
        <div className="w-1/3 whitespace-nowrap relative inset-y-0 left-0 ...">
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