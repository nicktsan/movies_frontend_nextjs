"use server"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MovieOwnershipList from "../components/search/MovieOwnershipList";
import getAllMovieOwnership from "../utils/getAllMovieOwnership";
import { SearchMyMovies } from "../components/search/searchMyMovies";
//a protected can be navigated to with localhost:3000/mymovies if the user is signed in.
export default async function MyMovies() {
    const session = await getServerSession();
    //if user is not signed in, redirect to sign in page
    if (!session || !session.user) {
        // redirect("/api/auth/signin");
        return (
            <div>
                Please sign in to access this content.
            </div>
        )
    }
    // console.log("session: ", session)
    const movies = await getAllMovieOwnership()
    // console.log("movieOwnership:")
    // console.log(movieOwnership)
    //otherwise, user can access the mymovies page
    //by default we want the movieownershiplist to display all movies the user owns

    return (
        <div className="col-span-2">
            <SearchMyMovies />
            <MovieOwnershipList movieOwnership={movies} />
        </div>
    )
}