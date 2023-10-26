import Stripe from "stripe"

// let stripe: Promise<Stripe | null>;
let stripe: Stripe | null;
const getStripe = () => {
    if (!stripe) {
        stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY!, {
            apiVersion: '2023-10-16',
        });
        // stripe = loadStripe(process.env.STRIPE_TEST_SECRET_KEY!);
        console.log("Instantiated a new Stripe object.")
    } else {
        console.log("Found an existing Stripe object instance.")
    }
    return stripe;
};

export default getStripe;