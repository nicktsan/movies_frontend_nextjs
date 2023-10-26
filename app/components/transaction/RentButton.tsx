'use client'
import React, { useState } from 'react'
import checkEmpty from '../../utils/checkEmpty'
import PurchaseConfirmedModal from './PurchaseConfirmedModal'
import PurchaseMovieModal from './PurchaseMovieModal'
import { signIn, useSession } from "next-auth/react"
import { MovieRecord } from '../movies/MovieRecord'

export default function RentButton({ movieInfo }: { movieInfo: MovieRecord }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const { data: session } = useSession();
    const fixedPrice = checkEmpty(movieInfo.rentPrice).toLocaleString('en-CA', {
        style: 'currency',
        currency: movieInfo.rentCurrency.toUpperCase()
    })

    function handleClick() {
        if (!session) {
            signIn()
        } else {
            setActiveIndex(1)
        }
    }

    return (
        <>
            <button type="button" id="check" onClick={handleClick} className="py-1 px-2 bg-blue-100">Rent Price: {fixedPrice}</button>
            <PurchaseMovieModal
                title={movieInfo.name}
                price={fixedPrice}
                purchaseType="rent"
                isActive={activeIndex === 1}
                handleClick2={() => setActiveIndex(2)}
                closeModal={() => setActiveIndex(0)}
            />
            <PurchaseConfirmedModal
                title={movieInfo.name}
                price={fixedPrice}
                purchaseType="rent"
                isActive={activeIndex === 2}
                closeModal={() => setActiveIndex(0)}
            />
        </>
    )
}