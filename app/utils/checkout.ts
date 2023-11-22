import axios from "axios";
import getCustomer from "./getCustomer";

export default async function checkout(priceID: string, email: string) {
    const paymentApiUrl = `/api/payment`
    const searchCustomerUrl = `/api/searchcustomers`
    // console.log("priceID")
    // console.log(priceID)
    let currentURL = new URL(window.location.href).toString()
    currentURL = currentURL.split("&")[0]
    //consolidate data into a json
    // const customerData = await getCustomer(email)
    const { data } = await axios.post(paymentApiUrl,
        {
            priceId: priceID,
            prevWindow: currentURL,
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
        })
    //redirect user to data
    window.location.assign(data)
}