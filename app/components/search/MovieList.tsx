import { MovieRecord } from "../movies/MovieRecord"
import RentButton from "../transaction/RentButton"
import BuyButton from "../transaction/BuyButton"
export default function MovieList({ movie }: { movie: MovieRecord[] }) {
    return (
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
    )
}