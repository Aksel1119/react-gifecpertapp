import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

function GifGrid( {categoria} ) {

const {data:imagenes, loading}= useFetchGifs( categoria);


    return (
        <>
         <h3 className='card animate__animated animate__fadeInLeftBig'>{categoria}</h3>

         {loading &&<p className='card animate__animated animate__flash'>loading</p>}
        
        <div className='card-grid'>

                {imagenes.map((img )=>(
                    <GifGridItem key={img.id} {...img}/>
                ))
                }
           
        </div>
        </>
    )
}

export default GifGrid
