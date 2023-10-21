import axios from 'axios'
import { MovieRecord } from '../components/movies/MovieRecord'

export default async function getMovies(searchParams: string) {
    //console.log("formData:")
    //console.log(formData.get('search'))
    //extract the input from the formdata with formData.get()
    let result: MovieRecord[] = []
    try {
        const url = process.env.URL + "titles/" + searchParams
        //console.log("url:")
        //console.log(url)
        await axios.get<MovieRecord[]>(url)
            .then(res => {
                //console.log("res:")
                //console.log(res);
                //console.log(res.data);
                // setMovie(movie => movie = res.data);
                result = res.data
                //console.log("movie after set:")
                //console.log(movie);
            })
    } catch (error) {
        console.log("error occured")
        console.log(error)
    }
    return result
}