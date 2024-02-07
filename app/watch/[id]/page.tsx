"use client"
import MuxPlayer from '@mux/mux-player-react';
export default function Page({
    params,
}: {
    params: { id: string }
}) {

    // console.log("param: ", params.id)
    return (
        <div>
            <MuxPlayer streamType="on-demand" playbackId={params.id} accentColor="#ac39f2" />
        </div>

    );
}
