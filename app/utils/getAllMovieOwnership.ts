'use server'
import axios from 'axios'
import { MovieOwnership } from '../components/movies/MovieOwnership'
import { getServerSession } from "next-auth";

export default async function getAllMovieOwnership() {
    const session = await getServerSession();
    let result: MovieOwnership[] = []
    try {
        const url = process.env.AWS_MOVIE_OWNERSHIP_URL
        // console.log('getmovies url:')
        // console.log(url)
        await axios.get(url!, {
            headers: {
                'customer': session?.user?.email
            }
        })
            .then(res => {
                // console.log("res:")
                // console.log(res);
                // console.log("res.data:")
                // console.log(res.data);
                result = res.data.message
                //console.log("movie after set:")
                //console.log(movie);
            })
    } catch (error) {
        console.log("error occured during MovieOwnership")
        console.log(error)
    }
    return result
}