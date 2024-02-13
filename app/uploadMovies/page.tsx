"use client"

import { useSession } from "next-auth/react";
import MuxUploaderContainer from "../components/mux/MuxUploaderContainer";

export default function UploadMovies() {
    const { data: session } = useSession();
    // console.log(session)
    //Currently only able to access session user role from client side. If I find a way to access it server side, 
    // I will implement that method.
    if (!session || !session.user.role?.find((element) => element === 'admin')) {
        return (
            <div>
                <h1>Upload Movies Page</h1>
                <br />
                Please be an admin to see this content
            </div>
        )
    }

    return (
        <div>
            <h1>Upload Movies Page</h1>
            <MuxUploaderContainer />
        </div>
    )

}