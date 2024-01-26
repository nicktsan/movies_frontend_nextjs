"use server"
import Mux from '@mux/mux-node';

let mux: Mux | null;
const getmux = () => {
    //if no mux instance, instantiate a new mux instance. Otherwise, return the existing mux instance without
    //instantiating a new one.
    if (!mux) {
        mux = new Mux(process.env.MUX_TOKEN_ID!, process.env.MUX_TOKEN_SECRET!);
        // console.log("Instantiated a new mux object.")
    } else {
        // console.log("Found an existing mux object instance.")
    }
    return mux;
};

export default getmux;