import axios from 'axios'
import { MovieRecord } from '../components/movies/MovieRecord'

export default async function getMoviePrices(searchParams: string) {
    //console.log("formData:")
    //console.log(formData.get('search'))
    //extract the input from the formdata with formData.get()
    let result: MovieRecord[] = []
    try {
        // const url = process.env.AWS_DYNAMO_DB_MOVIES_URL + "titles/" + searchParams
        const url = `${process.env.TESTING_URL}/api/getprices/${searchParams}`
        // console.log('getmovies url:')
        // console.log(url)
        // await axios.get<MovieRecord[]>(url)
        await axios.get(url)
            .then(res => {
                // console.log("res:")
                // console.log(res);
                // console.log(res.data);
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