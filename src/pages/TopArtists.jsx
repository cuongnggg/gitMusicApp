
import axios from 'axios'

import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery()

    if (isFetching ) return <Loader title='Loading Top Artists' />
    if (error && country) return <Error />

    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Artists
        {data?.map((track) => {
            <ArtistCard 
                key = {track.key} track = {track}
            />
        })}
        </h2>
    </div>

)
}

export default TopArtists;
