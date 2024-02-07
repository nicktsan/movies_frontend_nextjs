'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter/*, usePathname*/ } from 'next/navigation';
function SearchMyMovies({ search }: { search?: string }) {
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
        router.replace((`/mymovies/search?${params.toString()}`))
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieSearch(event.target.value);
    }

    return (
        <div>
            <form className="flex justify-start items-baseline gap-2" action={GoToSearchParams}>
                <label>
                    Search for my movies:
                    <input onChange={handleChange} value={movieSearch} className="border 4 border-black" type="text" name="search" />
                </label>
                <button className="py-1 px-2 bg-gray-100 hover:text-gray-300 hover:bg-gray-700" type="submit">Search</button>
            </form>
        </div>
    )
}
export { SearchMyMovies }