import { useDispatch, useSelector } from 'react-redux'
import { Error, Loader, SongCard} from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'



const Discover = () => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery() //data: resource cua Api call, isFetching propoties: show the loading state trạng thái chờ ?, và error
    const genreTitle = 'Pop'
    console.log(data)
    if(isFetching) return <Loader title="Loading songs..." />

    if(error) return <Error/>

    return (
        <div className='flex flex-col'>  {/* flex flex-col sẽ tạo ra div theo dạng Colunm */}
            {/*Tạo cột chọn cho Genre (Option)*/}
            <div className='w-full flex justify-between items-center
                            sm:flex-row flex-col mt-4 mb-10'> {/* w-full cho chiều ngang full web, sm: small device, mt: margin top, mb: margin bottom */}
                <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2> {/* text-3xl cho cỡ chữ */}
                <select
                    onChange={() => {}}
                    value = ''
                    className = 'bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5' 
                >                 {/* p-3 cho padding, text-sm cho smaller text, rounded-lg cho radius bo tro`n element  */}
                   {genres.map((genre => <option key={genre.value} value={genre.value}>{genre.title}</option>))} {/* Lấy thông tin từng thành phần trong genre */}
                    {/* object option: từng option sẽ có key,value gọi ra để display genre.title */}
                </select>
            </div>
            {/*Tạo Wrapper cho Songs */}
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {/* Mỗi bài hát sẽ gọi songCard component để lấy giá trị */}
                {data?.map((song, i) => (
                    <SongCard 
                        key = {song.key}
                        song = {song}
                        isPlaying = {isPlaying}
                        activeSong = {activeSong}
                        data = {data}
                        i = {i}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Discover;
