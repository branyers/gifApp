import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'


const GifApp = () => {

    const [category, setCategory] = useState(["One Punch"])



    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategory} />
            <hr />

                {
                    category.map(category => (
                        <GifGrid key={category} category={category} />
                    ))

                }
        </div>
    )
}



export default GifApp
