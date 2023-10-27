import { MovieRecord } from '../components/movies/MovieRecord'
export default function concatMovieIds(movies: MovieRecord[]) {
    let query: string = ""
    //if movies has at least 1 element, add the first one to the string
    if (movies.length > 0) {
        query = `product:'${movies[0].id}'`
        //for each element after the first, add OR product:currentElement
        if (movies.length > 1) {
            for (let i = 1; i < movies.length; i++) {
                query += ` OR product:'${movies[i].id}'`
            }
        }
    }
    return query
}