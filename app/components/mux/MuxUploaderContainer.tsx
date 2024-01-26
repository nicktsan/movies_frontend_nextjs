"use client"
import MuxUploader from '@mux/mux-uploader-react';

export default function MuxUploaderContainer({ endpoint }: { endpoint: string }) {
    return (
        <MuxUploader endpoint={endpoint} />
    )
}
