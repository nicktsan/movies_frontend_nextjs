// import Stripe from "stripe"
import getStripe from "@/app/utils/get-stripe";
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: Request) {
    const stripe = getStripe()
    let data = await request.json()
    // console.log("data")
    // console.log(data)
    let priceId = data.priceId
    // console.log("priceId")
    // console.log(priceId)
    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.ENV_URL}`,///?success=true`,
            cancel_url: `${process.env.ENV_URL}`,///?canceled=true`,
            // automatic_tax: { enabled: true },
        });
        // request.redirect(303, session.url);
        return NextResponse.json(session.url)
    } catch (err: any) {
        // request.status(err.statusCode || 500).json(err.message);
        console.log("error occured in api/payment")
        console.log(err)
        return NextResponse.json(err)
    }
}
