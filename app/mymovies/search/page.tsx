"use server"
// import React from 'react'
// import withAuth from '../utils/withAuth';
// import { Auth } from 'aws-amplify';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SearchMyMovies } from "../../components/search/searchMyMovies";
import MovieOwnershipList from "../../components/search/MovieOwnershipList";
import { MovieOwnership } from "@/app/components/movies/MovieOwnership";
import getSpecificMovieOwnership from "@/app/utils/getSpecificMovieOwnership";

//a protected can be navigated to with localhost:3000/mymovies if the user is signed in.
export default async function MyMoviesSearch({
    searchParams,
}: {
    searchParams: { search?: string }
}) {
    const session = await getServerSession();
    //if user is not signed in, redirect to sign in page
    if (!session || !session.user) {
        redirect("/api/auth/signin");
    }
    // todo
    const searchQuery = searchParams.search ?? ""
    let movies: MovieOwnership[] = []
    const data = await getSpecificMovieOwnership(searchQuery)
    //Sample api call from postman: http://localhost:3000/api/getproducts/?title=Blade

    // If there is a search query, set movies to search results
    if (searchQuery.length > 0) {
        // If there is a result, set movies to result
        if (data) {
            movies = data
        }
        // If there is no result, set movies to empty array
        else {
            movies = []
        }
    }
    // If there is no search query, set movies to initial data. In our case, we want no movies to be displayed initially
    else {
        movies = []
    }
    //otherwise, user can access the mymovies page
    return (
        <div>
            <SearchMyMovies search={searchQuery} />
            <h1>My Movies Page {searchParams.search} </h1>
            <br />
            You will only see this if you are authenticated.
            <MovieOwnershipList movieOwnership={movies} />
        </div>
    )
}