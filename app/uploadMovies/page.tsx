"use server"

import { getServerSession } from "next-auth";
import MuxUploaderContainer from "../components/mux/MuxUploaderContainer";

//a protected can be navigated to with localhost:3000/mymovies if the user is signed in.
export default async function UploadMovies() {
    const session = await getServerSession();

    //if user is not signed in, redirect to sign in page
    if (!session || !session.user.role?.find((element) => element === 'admin')) {
        return (
            <div className="ml-6">
                <h1>Upload Movies Page</h1>
                <br />
                You will only see this if you are an admin.
                <MuxUploaderContainer />
            </div>
        )
    }

    return (
        <div className="ml-6">
            <h1>Upload Movies Page</h1>
            <br />
            Please be an admin to see this content
        </div>
    )
}