import axios from "axios";

export default async function checkout(priceID: string) {
    const url = `/api/payment`
    console.log("priceID")
    console.log(priceID)
    //consolidate data into a json
    const { data } = await axios.post(url,
        {
            priceId: priceID
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
        })
    // TODO CHANGE CHECKOUT REDIRECT TO SUCCESS MODAL UPON SUCCESSFUL CHECKOUT
    //redirect user to data
    window.location.assign(data)
}