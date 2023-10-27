import Stripe from "stripe"
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
    { params }: { params: { title: string } }
) {
    const title = params.title
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
    //Sample api call from postman: http://localhost:3000/api/getproducts/blade
    // console.log("getproducts route.ts title")
    // console.log(title)
    // console.log("productsearch")
    // console.log(`name~'${title}'`)
    const productsearch = await stripe.products.search({
        // query: "name~\'Blade\'"
        query: `name~'${title.trim()}' AND active:'true'`
    })
    // const products = await stripe.products.list()
    // return NextResponse.json(products.data)
    return NextResponse.json(productsearch.data.reverse())
    // return NextResponse.json(products.data.reverse())
    // return NextResponse.json(prices.data.reverse())
}