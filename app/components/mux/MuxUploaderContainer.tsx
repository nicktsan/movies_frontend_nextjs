"use client";
import { useState } from "react";
import MuxUploader from "@mux/mux-uploader-react";
import CreateUploadUrl from "@/app/utils/create-upload-url";
export default function MuxUploaderContainer() {
    const [uploadUrl, setUploadUrl] = useState<string>("");
    return (
        <div>
            <form action={async (e) => {
                const updatedUrl = await CreateUploadUrl(e)
                setUploadUrl(updatedUrl)
            }}>
                <input className="border 4 border-black" type="text" name="title" />
                <button className="py-1 px-2 bg-gray-100" type="submit">Set next upload's title</button>
            </form>
            <MuxUploader endpoint={uploadUrl} />
        </div>
    );
}