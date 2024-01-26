"use server"
import { MovieRecord } from "../components/movies/MovieRecord"
import { SearchMovies } from "../components/search/searchMovies"
import MovieList from "../components/search/MovieList"
import getMovies from "../utils/getMovies"
import PurchaseSucceedOrFailModal from "../components/transaction/PurchaseSucceedOrFailModal"

const Page = async ({
    searchParams,
}: {
    searchParams: { search?: string }
}) => {
    // console.log("searchParams.search: ")
    // console.log(searchParams.search)
    const searchQuery = searchParams.search ?? ""
    let movies: MovieRecord[] = []
    const data = await getMovies(searchQuery)
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
    // console.log("movies:")
    // console.log(movies)
    return (
        <div>
            {/* Search */}
            <SearchMovies search={searchQuery} />
            {/* Producs */}
            <MovieList movie={movies} />
            <PurchaseSucceedOrFailModal />
        </div>
    )
}

export default Page