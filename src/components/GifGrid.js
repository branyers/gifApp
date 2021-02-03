
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from './hooks/useFetchGif';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])
const {data:images,loading} = useFetchGif(category);

    

    return (
        <>
            <h2 className="animate__animate animate__fadeIn">{category}</h2>
            {loading && <p className="animate__animate animate__flash">Loading...</p>}
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))

                }
            </div>
        </>
    )
}
