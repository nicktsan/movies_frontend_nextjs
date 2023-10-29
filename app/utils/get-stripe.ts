import Stripe from "stripe"
let stripe: Stripe | null;
const getStripe = () => {
    //if no stripe instance, instantiate a new stripe instance. Otherwise, return the existing stripe instance without
    //instantiating a new one.
    if (!stripe) {
        stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY!, {
            apiVersion: '2023-10-16',
        });
        // console.log("Instantiated a new Stripe object.")
    } else {
        // console.log("Found an existing Stripe object instance.")
    }
    return stripe;
};

export default getStripe;