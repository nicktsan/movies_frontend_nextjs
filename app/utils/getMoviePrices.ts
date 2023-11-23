'use server'
import axios from 'axios'
import { MovieRecord } from '../components/movies/MovieRecord'

export default async function getMoviePrices(searchParams: string) {
    let result: MovieRecord[] = []
    try {
        // const url = process.env.AWS_DYNAMO_DB_MOVIES_URL + "titles/" + searchParams
        const url = `${process.env.ENV_URL}/api/getprices/${searchParams}`
        // console.log('getmovies url:')
        // console.log(url)
        await axios.get(url)
            .then(res => {
                // console.log("res:")
                // console.log(res);
                // console.log(res.data);
                result = res.data
                //console.log("movie after set:")
                //console.log(movie);
            })
    } catch (error) {
        console.log("error occured during getMoviePrices")
        console.log(error)
    }
    return result
}