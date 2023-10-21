'use client'
import React, { useState } from 'react'
import checkEmpty from '../../utils/checkEmpty'
import PurchaseConfirmedModal from './PurchaseConfirmedModal'
import PurchaseMovieModal from './PurchaseMovieModal'

export default function RentButton({ title, price }: { title: string, price: number }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const fixedPrice = checkEmpty(price)

    return (
        <>
            <button type="button" id="check" onClick={() => setActiveIndex(1)} className="py-1 px-2 bg-blue-100">Rent Price: ${fixedPrice}</button>
            <PurchaseMovieModal
                title={title}
                price={fixedPrice}
                purchaseType="rent"
                isActive={activeIndex === 1}
                handleClick2={() => setActiveIndex(2)}
                closeModal={() => setActiveIndex(0)}
            />
            <PurchaseConfirmedModal
                title={title}
                price={fixedPrice}
                purchaseType="rent"
                isActive={activeIndex === 2}
                closeModal={() => setActiveIndex(0)}
            />
        </>
    )
}