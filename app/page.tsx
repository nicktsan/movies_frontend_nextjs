import { getServerSession } from 'next-auth/next';
import { SearchMovies } from './components/search/searchMovies';
import MovieList from './components/search/MovieList';
import getMovies from './utils/getMovies';
import { MovieRecord } from './components/movies/MovieRecord';

export default async function Home() {
  //const session = await getServerSession();
  const data = await getMovies("")
    //Sample api call from postman: http://localhost:3000/api/getproducts/?title=Blade

    // If there is a search query, set movies to search results
    // if (searchQuery.length > 0) {
        // If there is a result, set movies to result
  let movies: MovieRecord[] = []
      if (data) {
      movies = data
  }
  return (
    <div className="col-span-2">
      {/* getServerSession Result
      {session?.user?.email ? (
        <div>{session?.user?.email}</div>
      ) : (
        <div>Not loggined in</div>
      )} */}
      <SearchMovies />
      <MovieList movie={movies} />
    </div>
  )
} 
