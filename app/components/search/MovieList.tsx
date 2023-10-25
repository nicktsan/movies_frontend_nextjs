import { MovieRecord } from "../movies/MovieRecord"
import RentButton from "../transaction/RentButton"
import BuyButton from "../transaction/BuyButton"
import Image from 'next/image'
import getMoviePrices from "@/app/utils/getMoviePrices"
export default async function MovieList({ movie }: { movie: MovieRecord[] }) {

    // let newMovie: MovieRecord[]
    const newMovie = await Promise.all(movie.map(async (element) => {
        // console.log('movie id:')
        // console.log(element.id)
        const prices = await getMoviePrices(element.id)
        // console.log("element")
        // console.log(element)
        // console.log('prices')
        // console.log(prices)
        const buyPriceInfo = prices.find((price) => price.nickname.toLowerCase().includes("buy"))
        // console.log("buyPriceInfo")
        // console.log(buyPriceInfo)
        const buyPrice = buyPriceInfo?.unit_amount / 100
        // console.log("buyPrice")
        // console.log(buyPrice)
        const rentPriceInfo = prices.find((price) => price.nickname.toLowerCase().includes("rental"))
        // console.log("rentPriceInfo")
        // console.log(rentPriceInfo)
        const rentPrice = rentPriceInfo?.unit_amount / 100
        // console.log("rentPrice")
        // console.log(rentPrice)
        element.buyPrice = buyPrice
        element.rentPrice = rentPrice
        // console.log("element:")
        // console.log(element)
        return element
    }));
    console.log("newMovie")
    console.log(newMovie)

    return (
        <ul>
            {
                //for each element in movie, map them into a list. This should initially display nothing as no
                //movie has been searched for.
                Array.from(movie)
                    .map((movieRecord: MovieRecord) =>
                        <div>
                            <Image
                                alt={movieRecord.name}
                                src={movieRecord.images[0]}
                                width={100}
                                height={100}
                            />
                            <li key={movieRecord.id}>{/*Year: {movieRecord.year}, */}Title: {movieRecord.name},
                                <RentButton title={movieRecord.name} price={movieRecord.rentPrice} />
                                <BuyButton title={movieRecord.name} price={movieRecord.buyPrice} />
                            </li>
                        </div>
                    )
            }
        </ul>
    )
}