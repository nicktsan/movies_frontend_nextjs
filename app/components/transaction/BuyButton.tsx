'use client'
import React, { useState } from 'react'
import checkEmpty from '../../utils/checkEmpty'
import PurchaseConfirmedModal from './PurchaseConfirmedModal'
import PurchaseMovieModal from './PurchaseMovieModal'
import { signIn, useSession } from "next-auth/react"

export default function BuyButton({ title, price }: { title: string, price: number }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const { data: session } = useSession();
    const fixedPrice = checkEmpty(price)

    function handleClick() {
        if (!session) {
            signIn()
        } else {
            setActiveIndex(1)
        }
    }

    return (
        <>
            <button type="button" id="check" onClick={handleClick} className="py-1 px-2 bg-blue-100">Buy Price: ${fixedPrice}</button>
            <PurchaseMovieModal
                title={title}
                price={fixedPrice}
                purchaseType="buy"
                isActive={activeIndex === 1}
                handleClick2={() => setActiveIndex(2)}
                closeModal={() => setActiveIndex(0)}
            />
            <PurchaseConfirmedModal
                title={title}
                price={fixedPrice}
                purchaseType="buy"
                isActive={activeIndex === 2}
                closeModal={() => setActiveIndex(0)}
            />
        </>
    )
}