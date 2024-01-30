"use server"
import axios from 'axios'
import { MovieStorageData } from '../components/movies/MovieStorageData'

export default async function getMuxVideo(title: string) {
    let result: MovieStorageData[] = []
    try {
        const url = `${process.env.AWS_MOVIE_STORAGE_DATA_URL}/${title}`
        // console.log('getMuxVideo url:')
        // console.log(url)
        await axios.get(url!)
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
        console.log("error occured during getMuxVideo")
        console.log(error)
    }
    return result
}