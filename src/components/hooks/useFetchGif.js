import { useState,useEffect } from 'react'
import { getGif } from '../../helpers/getGif'

export const useFetchGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })
    
    useEffect(() => {
        getGif(category).then(img =>{
            setTimeout(()=>{
                setstate({
                    data:img,
                    loading:false,
                })
            })
        })
     }, [category])
 


    return state;
}
