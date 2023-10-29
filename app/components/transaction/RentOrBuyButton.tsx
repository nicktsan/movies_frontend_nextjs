'use client'
import React/*, { useState }*/ from 'react'
import checkEmpty from '../../utils/checkEmpty'
import PurchaseConfirmedModal from './PurchaseConfirmedModal'
import PurchaseMovieModal from './PurchaseMovieModal'
import { signIn, useSession } from "next-auth/react"
import { MovieRecord } from '../movies/MovieRecord'
import checkout from '@/app/utils/checkout'

export default function RentOrBuyButton({ movieInfo, purchaseType }: { movieInfo: MovieRecord, purchaseType: string }) {
    // const [activeIndex, setActiveIndex] = useState(0)
    const { data: session } = useSession();
    // const session = await getServerSession();
    //Button is a rent or buy button based on the purchaseType prop. This allows us to make one button file 
    //instead of two button files
    let price: number = movieInfo.rentPrice
    let priceCurrency: string = movieInfo.rentCurrency
    let priceID: string = movieInfo.rentId
    if (purchaseType.toLowerCase() === 'buy') {
        price = movieInfo.buyPrice
        priceCurrency = movieInfo.buyCurrency
        priceID = movieInfo.buyId
    }
    const fixedPrice = checkEmpty(price).toLocaleString('en-CA', {
        style: 'currency',
        currency: priceCurrency.toUpperCase()
    })
    //if user is not signed in, redirect them to signin page. If they are signed in, redirect them to checkout page
    function handleClick(event: React.MouseEvent) {
        event.preventDefault()
        if (!session) {
            signIn()
        } else {
            // setActiveIndex(1)
            checkout(priceID)
        }
    }

    return (
        <>
            <button type="button" id="check" onClick={handleClick} className="py-1 px-2 bg-blue-100">{purchaseType.charAt(0).toUpperCase() + purchaseType.toLowerCase().slice(1)} Price: {fixedPrice}</button>
            {/* <PurchaseMovieModal
                title={movieInfo.name}
                price={fixedPrice}
                purchaseType={purchaseType.toLowerCase()}
                isActive={activeIndex === 1}
                handleClick2={() => setActiveIndex(2)}
                closeModal={() => setActiveIndex(0)}
            />
            <PurchaseConfirmedModal
                title={movieInfo.name}
                price={fixedPrice}
                purchaseType={purchaseType.toLowerCase()}
                isActive={activeIndex === 2}
                closeModal={() => setActiveIndex(0)}
            /> */}
        </>
    )
}