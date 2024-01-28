"use server"
import getmux from "./get-mux";
export default async function CreateUploadUrl(formData: FormData): Promise<string> {
    const mux = getmux()
    const title = formData.get("title")?.toString()
    const directUpload = await mux.Video.Uploads.create({
        cors_origin: '*',
        new_asset_settings: {
            playback_policy: 'public',
            passthrough: title,
        },
    });
    console.log("directUpload: ", directUpload)
    return directUpload.url
}