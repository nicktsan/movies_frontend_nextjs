//example of a server action that can call a client component
import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerAction() {
    const whoAmI = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.email || "Not Logged In";
    };
    return (
        <div>
            <WhoAmIButton whoAmIAction={whoAmI} />
        </div>
    );
}