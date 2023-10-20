'use client'
import React, { useState } from 'react';
import axios from 'axios';
import data from '../inputdata/inputdata.json'
import checkEmpty from '../utils/checkEmpty';
import RentButton from './RentButton'
import BuyButton from './BuyButton';

export interface MovieRecord {
    year: number;
    title: string;
    rentPrice: number;
    buyPrice: number;
}
function SearchMovies() {
    const { URL } = data
    const [movie, setMovie] = useState([])

    function HandleSubmit(formData: FormData) {
        //console.log("formData:")
        //console.log(formData.get('search'))
        //extract the input from the formdata with formData.get()
        try {
            const url = URL + "titles/" + formData.get('search')
            //console.log("url:")
            //console.log(url)
            axios.get(url)
                .then(res => {
                    //console.log("res:")
                    //console.log(res);
                    //console.log(res.data);
                    setMovie(movie => movie = res.data);
                    //console.log("movie after set:")
                    //console.log(movie);
                })
        } catch (error) {
            //console.log("error occured")
            //console.log(error)
        }
    }

    return (
        <div>
            <form action={HandleSubmit}>
                <label>
                    Search for movies:
                    <input className="border 4 border-black" type="text" name="search" />
                </label>
                <button className="py-1 px-2 bg-gray-100" type="submit">Search</button>
            </form>
            <ul>
                {
                    //for each element in movie, map them into a list. This should initially display nothing as no
                    //movie has been searched for.
                    Array.from(movie)
                        .map((movieRecord: MovieRecord) =>
                            <li key={movieRecord.year}>Year: {movieRecord.year}, Title: {movieRecord.title},
                                <RentButton title={movieRecord.title} price={movieRecord.rentPrice} />
                                <BuyButton title={movieRecord.title} price={movieRecord.buyPrice} />
                            </li>
                        )
                }
            </ul>
        </div>
    )
}
export { SearchMovies }