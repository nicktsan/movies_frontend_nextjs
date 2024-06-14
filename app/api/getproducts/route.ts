import { NextResponse } from "next/server"
import getStripe from "@/app/utils/get-stripe";

export async function GET(
    request: Request,
    { params }: { params: { title: string } }
) {
    const stripe = getStripe()

    //Sample api call from postman: http://localhost:3000/api/getproducts/

    const productsearch = await stripe.products.search({
        query: `active:'true'`
    })

    return NextResponse.json(productsearch.data.reverse())
}