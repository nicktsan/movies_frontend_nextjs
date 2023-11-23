// import Stripe from "stripe"
'use server'
import getStripe from "@/app/utils/get-stripe";
import { NextResponse } from "next/server"
// import { getServerSession } from "next-auth";

export async function GET(
    request: Request,
    { params }: { params: { email: string } }
) {
    const email = params.email
    // const session = await getServerSession();
    const stripe = getStripe()
    //: for exact match operator (ex: "name:\'Blade Runner (1982)\'")
    //~ for substring match (ex:"name~\'Blade\'")
    //Sample api call from postman: http://localhost:3000/api/searchcustomers/<email>
    // console.log(email)
    const customer = await stripe.customers.search({
        query: `email:"${email.trim()}"`
    })
    return NextResponse.json(customer.data.reverse())
}
