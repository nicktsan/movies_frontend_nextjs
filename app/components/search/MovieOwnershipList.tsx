"use server"
import { MovieOwnership } from "../movies/MovieOwnership"
import Image from 'next/image'
import WatchButton from "../watch/WatchButton"
export default async function MovieOwnershipList({ movieOwnership }: { movieOwnership: MovieOwnership[] }) {
    if (!movieOwnership){
        movieOwnership = []
    }
    return (
        <ul className="grid gap-y-4">
            {
                //for each element in movieOwnership, map them into a list. This should initially display nothing as no
                //movieOwnership has been searched for.
                Array.from(movieOwnership)
                    .map((movieOwnershipRecord: MovieOwnership) =>
                        <div className="flex justify-start gap-2" key={movieOwnershipRecord.title}>
                            <Image
                                alt={movieOwnershipRecord.title}
                                src={movieOwnershipRecord.image}
                                width={100}
                                height={100}
                            />
                            <li className="flex-col space-y-2" key={movieOwnershipRecord.title}>
                                <div>
                                    {movieOwnershipRecord.title}
                                </div>
                                < WatchButton movieOwnership={movieOwnershipRecord} />
                            </li>
                        </div>
                    )
            }
        </ul>
    )
}