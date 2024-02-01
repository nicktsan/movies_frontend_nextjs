'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter/*, usePathname*/ } from 'next/navigation';
function SearchMovies({ search }: { search?: string }) {
    const router = useRouter()
    const [movieSearch, setMovieSearch] = useState(search);
    // const pathname = usePathname()

    //redirect user to search page
    function GoToSearchParams(formData: FormData) {
        // let params = new URLSearchParams(window.location.search)
        let params = new URLSearchParams(`search=${formData.get('search')}`)
        // console.log("params:")
        // console.log(params)
        // console.log((`/search-params?${params.toString()}`))
        router.replace((`/search-params?${params.toString()}`))
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieSearch(event.target.value);
    }

    return (
        <div className="flex justify-center items-center">
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