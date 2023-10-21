'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
function SearchMovies({ search }: { search?: string }) {
    const router = useRouter()
    function GoToSearchParams(formData: FormData) {
        router.push(`/search-params?search=${formData.get('search')}`)
    }

    return (
        <div>
            <form action={GoToSearchParams}>
                <label>
                    Search for movies:
                    <input value={search} className="border 4 border-black" type="text" name="search" />
                </label>
                <button className="py-1 px-2 bg-gray-100" type="submit">Search</button>
            </form>
        </div>
    )
}
export { SearchMovies }