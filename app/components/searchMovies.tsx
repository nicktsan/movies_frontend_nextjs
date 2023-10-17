'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../inputdata/inputdata.json'

export interface MovieRecord {
    year: number;
    title: string;
    rentPrice: number;
    buyPrice: number;
}
function SearchMovies() {
    const { URL } = data
    const [movieSearch, setMovieSearch] = useState("");
    const [movie, setMovie] = useState([])
    //const fetcher = (url: string) => axios.get(url).then((res) => res.data);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieSearch(event.target.value);
    }

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(movieSearch)
        //if (movieSearch.trim() !== "") {
        console.log("movieSearch from handleSubmit: " + movieSearch)
        const url = URL + "titles/" + movieSearch
        console.log("url:")
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log("res:")
                console.log(res);
                console.log(res.data);
                setMovie(movie => movie = res.data);
                console.log("movie after set:")
                console.log(movie);
            })
        //}
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <label>
                    Search for movies:
                    <input type="text" /*moviesearch="movieSearch"*/ onChange={handleChange} />
                </label>
                <button type="submit">Search</button>
            </form>
            <ul>
                {
                    Array.from(movie)
                        .map((movieRecord: MovieRecord) =>
                            <li key={movieRecord.year/*[movie.year, movie.title]*/}>Year: {movieRecord.year}, Title: {movieRecord.title}, Rent Price: {movieRecord.rentPrice} Buy Price: {movieRecord.buyPrice} </li>
                        )
                }
            </ul>
        </div>
    )
}
export { SearchMovies }