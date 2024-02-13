"use client"
import { signIn, useSession } from "next-auth/react"
import { MovieOwnership } from '../movies/MovieOwnership'
import getMuxVideo from "@/app/utils/getMuxVideo";
import { useRouter } from 'next/navigation';
export default function WatchButton({ movieOwnership }: { movieOwnership: MovieOwnership }) {
    const { data: session } = useSession();
    const router = useRouter();
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
            <button type="button" id="watch" onClick={async () => {
                // console.log("movieOwnership.title: ", movieOwnership.title)
                const muxVideoData = await getMuxVideo(movieOwnership.title)
                router.replace((`/watch/${muxVideoData[0].playbackid}`))
            }} className="py-1 px-2 bg-blue-100 hover:text-gray-300 hover:bg-gray-700">Watch</button>
        </>
    )
}