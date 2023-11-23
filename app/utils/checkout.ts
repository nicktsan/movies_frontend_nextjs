'use client' //we can only grab window.location from client components
import axios from "axios";
import getCustomer from "./getCustomer";
import { stripeCustomer } from "../components/stripe/stripeCustomer";

export default async function checkout(priceID: string, email: string) {
    const paymentApiUrl = `/api/payment`
    // console.log("priceID")
    // console.log(priceID)
    let currentURL = new URL(window.location.href).toString()
    currentURL = currentURL.split("&")[0]
    // console.log("email")
    // console.log(email)
    let customerData: stripeCustomer = await getCustomer(email)
    //consolidate data into a json
    const { data } = await axios.post(paymentApiUrl,
        {
            priceId: priceID,
            prevWindow: currentURL,
            customerId: customerData.id,
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
        })
    //redirect user to data
    window.location.assign(data)
}