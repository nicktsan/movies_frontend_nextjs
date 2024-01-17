'use client'
import { signIn, useSession } from "next-auth/react"
import { MovieOwnership } from '../movies/MovieOwnership'

export default function WatchButton({ movieOwnership }: { movieOwnership: MovieOwnership }) {
    const { data: session } = useSession();

    //if user is not signed in, redirect them to signin page. If they are signed in, redirect them to checkout page
    function handleClick(event: React.MouseEvent) {
        event.preventDefault()
        if (!session) {
            signIn()
        } else {
            // console.log(`watch button clicked for ${movieOwnership.title}`)
        }
    }

    return (
        <>
            <button type="button" id="watch" onClick={handleClick} className="py-1 px-2 bg-blue-100">Watch</button>
        </>
    )
}