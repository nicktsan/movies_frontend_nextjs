// import Stripe from "stripe"
import { NextResponse } from "next/server"
import getStripe from "@/app/utils/get-stripe";
/*
method for retrieving product and prices through searching
Step 1: search for product by querying name="title" and active:"true"
Step 2: convert response to json object. The json should include an id field.
Step 3: Use the id field from the product object to look up all of its prices
    where product:product.id and active:"true"
Step 4: convert the retrieved prices into json object. The json should include id (price id), unit amount 
    (aka price converted to cents) and nickname (aka description if viewed from browser), which we can use to 
    differentiate between rent and buy prices.
*/
export async function GET(
    request: Request,
    { params }: { params: { query: string } }
) {
    const query = params.query
    // const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY ?? "blah", {
    //     apiVersion: '2023-10-16',
    // });
    const stripe = getStripe()
    // const prices = await stripe.prices.list({ limit: 4 })
    // const prices = await stripe.prices.search({
    //     query: "active:\'true\' AND nickname:\'Bladerunner | 3 day rental\'"
    // })
    //: for exact match operator (ex: "name:\'Blade Runner (1982)\'")
    //~ for substring match (ex:"name~\'Blade\'")
    //Sample api call from postman: http://localhost:3000/api/getprices/prod_OsjwteD0JG9UVI
    // console.log(`product:'${id}' AND active:"true"`)
    const pricesearch = await stripe.prices.search({
        // query: `product:'${id.trim()}' AND active:"true"`
        query: query
        // query: `product:'prod_OsHXCtgv3F9phY' OR product:'prod_OsHkQvle2aSszQ'`
    })
    // const products = await stripe.products.list()
    // return NextResponse.json(products.data)
    return NextResponse.json(pricesearch.data.reverse())
    // return NextResponse.json(products.data.reverse())
    // return NextResponse.json(prices.data.reverse())
}