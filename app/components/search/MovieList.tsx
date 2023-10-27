import { MovieRecord } from "../movies/MovieRecord"
import RentButton from "../transaction/RentButton"
import BuyButton from "../transaction/BuyButton"
import Image from 'next/image'
import getMoviePrices from "@/app/utils/getMoviePrices"
import concatMovieIds from "@/app/utils/concatMovieIds"
export default async function MovieList({ movie }: { movie: MovieRecord[] }) {
    //concat all movie ids into a query for the getprices\[query] api
    const idsQuery = concatMovieIds(movie)
    // console.log("concatted idsQuery")
    // console.log(idsQuery)
    //get all prices with the matching movie ids
    let prices: MovieRecord[] = await getMoviePrices(idsQuery)
    // console.log("unfiltered prices:")
    // console.log(prices)
    //Only get prices where active === true. We do not want inactive/archived prices.
    //This is done manually on our end instead of with the Stripe api because Stripe query language cannot process 
    //queries with both AND and OR operators. Our query already uses OR, so we cannot add " AND active:"true""
    prices = prices.filter((price) => price.active === true)
    // console.log('filtered prices:')
    // console.log(prices)
    //for each movie, fetch their price information and add it to their MovieRecord properties
    await Promise.all(movie.map(async (element) => {
        //     // console.log('movie id:')
        //     // console.log(element.id)
        //     // console.log("element")
        //     // console.log(element)
        const buyPriceInfo = prices.find((price) => price.nickname.toLowerCase().includes("buy") &&
            price.product === element.id)
        // console.log("buyPriceInfo")
        // console.log(buyPriceInfo)
        const buyPrice = (buyPriceInfo?.unit_amount ?? 0) / 100
        // console.log("buyPrice")
        // console.log(buyPrice)
        const rentPriceInfo = prices.find((price) => price.nickname.toLowerCase().includes("rental") &&
            price.product === element.id)
        // console.log("rentPriceInfo")
        // console.log(rentPriceInfo)
        const rentPrice = (rentPriceInfo?.unit_amount ?? 0) / 100
        // console.log("rentPrice")
        // console.log(rentPrice)
        element.buyCurrency = buyPriceInfo?.currency ?? ''
        element.rentCurrency = rentPriceInfo?.currency ?? ''
        element.buyId = buyPriceInfo?.id ?? ''
        element.rentId = rentPriceInfo?.id ?? ''
        element.buyPrice = buyPrice
        element.rentPrice = rentPrice
        //     // console.log("element:")
        //     // console.log(element)
        return element
    }));
    // console.log("movie after map")
    // console.log(movie)

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
                            <li key={movieRecord.id}>{movieRecord.name}
                                <RentButton movieInfo={movieRecord} />
                                <BuyButton movieInfo={movieRecord} />
                            </li>
                        </div>
                    )
            }
        </ul>
    )
}