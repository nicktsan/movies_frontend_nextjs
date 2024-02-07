import { getServerSession } from 'next-auth/next';
import { SearchMovies } from './components/search/searchMovies';

export default async function Home() {
  //const session = await getServerSession();
  return (
    <div className="col-span-2">
      {/* getServerSession Result
      {session?.user?.email ? (
        <div>{session?.user?.email}</div>
      ) : (
        <div>Not loggined in</div>
      )} */}
      <SearchMovies />
    </div>
  )
} 
