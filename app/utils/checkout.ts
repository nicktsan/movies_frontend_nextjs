import axios from "axios";

export default async function checkout(priceID: string) {
    const apiUrl = `/api/payment`
    // console.log("priceID")
    // console.log(priceID)
    let currentURL = new URL(window.location.href).toString()
    currentURL = currentURL.split("&")[0]
    //consolidate data into a json
    const { data } = await axios.post(apiUrl,
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