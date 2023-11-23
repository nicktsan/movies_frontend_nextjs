'use server'
// import React from 'react'
// import withAuth from '../utils/withAuth';
// import { Auth } from 'aws-amplify';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"

//a protected can be navigated to with localhost:3000/dashboard if the user is signed in.
export default async function Dashboard() {
    const session = await getServerSession();
    //if user is not signed in, redirect to sign in page
    if (!session || !session.user) {
        redirect("/api/auth/signin");
    }
    //otherwise, user can access the dashboard page
    return (
        <div>
            <h1>Dashboard Page</h1>
            <br />
            You will only see this if you are authenticated.
        </div>
    )
}