"use client";
import { useState } from "react";

export default function WhoAmIButton({
    whoAmIAction,
}: {
    whoAmIAction: () => Promise<string>;
}) {
    const [email, setEmail] = useState<string>();
    return (
        <div>
            <button
                onClick={async () => {
                    setEmail(await whoAmIAction());
                }}
            >
                Who Am I?
            </button>
            {email && <div>You are {email}</div>}
        </div>
    );
}