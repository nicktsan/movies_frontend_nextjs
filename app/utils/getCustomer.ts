'use server'
import axios from 'axios'
import { stripeCustomer } from '../components/stripe/stripeCustomer'
// import { getServerSession } from 'next-auth'
// import { redirect } from "next/navigation"
export default async function getCustomer(searchParams: string) {
    // const session = await getServerSession();
    // //if user is not signed in, redirect to sign in page
    // if (!session || !session.user) {
    //     redirect("/api/auth/signin");
    // }
    let result: stripeCustomer[] = []
    try {
        // const url = process.env.AWS_DYNAMO_DB_MOVIES_URL + "titles/" + searchParams
        const url = `${process.env.ENV_URL}/api/searchcustomers/${searchParams}`
        // const url = `${process.env.ENV_URL}/api/searchcustomers/${session.user.email}`
        // console.log('getCustomer url:')
        // console.log(url)
        await axios.get(url)
            .then(res => {
                // console.log("res:")
                // console.log(res);
                // console.log(res.data);
                result = res.data
                //console.log("movie after set:")
                //console.log(movie);
            })
    } catch (error) {
        console.log("error occured during getCustomer")
        console.log(error)
    }
    return result[0]
}