'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
function SearchMovies({ search }: { search?: string }) {
    const router = useRouter()
    const [movieSearch, setMovieSearch] = useState(search);

    function GoToSearchParams(formData: FormData) {
        router.push(`/search-params?search=${formData.get('search')}`)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieSearch(event.target.value);
    }

    return (
        <div>
            <form action={GoToSearchParams}>
                <label>
                    Search for movies:
                    <input onChange={handleChange} value={movieSearch} className="border 4 border-black" type="text" name="search" />
                </label>
                <button className="py-1 px-2 bg-gray-100" type="submit">Search</button>
            </form>
        </div>
    )
}
export { SearchMovies }