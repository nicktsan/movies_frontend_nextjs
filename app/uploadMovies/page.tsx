'use server'

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MovieOwnershipList from "../components/search/MovieOwnershipList";
import getAllMovieOwnership from "../utils/getAllMovieOwnership";
import { SearchMyMovies } from "../components/search/searchMyMovies";
//a protected can be navigated to with localhost:3000/mymovies if the user is signed in.
export default async function UploadMovies() {
    const session = await getServerSession();
    //if user is not signed in, redirect to sign in page
    if (!session || !session.user.role?.find((element) => element === 'admin')) {
        // redirect("/api/auth/signin");
        return (
            <div>
                <h1>My Movies Page</h1>
                <br />
                You will only see this if you are an admin.
            </div>
        )
    }

    return (
        <div>
            <h1>Upload Movies Page</h1>
            <br />
            Please be an admin to see this content
        </div>
    )
}