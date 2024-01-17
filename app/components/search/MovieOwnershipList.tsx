'use server'
import { MovieOwnership } from "../movies/MovieOwnership"
import Image from 'next/image'
import WatchButton from "../watch/WatchButton"
export default async function MovieOwnershipList({ movieOwnership }: { movieOwnership: MovieOwnership[] }) {
    return (
        <ul>
            {
                //for each element in movieOwnership, map them into a list. This should initially display nothing as no
                //movieOwnership has been searched for.
                Array.from(movieOwnership)
                    .map((movieOwnershipRecord: MovieOwnership) =>
                        <div>
                            <Image
                                alt={movieOwnershipRecord.title}
                                src={movieOwnershipRecord.image}
                                width={100}
                                height={100}
                            />
                            {movieOwnershipRecord.title}
                            < WatchButton movieOwnership={movieOwnershipRecord} />
                        </div>
                    )
            }
        </ul>
    )
}