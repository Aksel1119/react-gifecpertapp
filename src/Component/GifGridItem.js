import React from 'react'

function GifGridItem( {url ,title, id} ) {

    
    return (
        <div className='card animate__animated animate__fadeInRightBig'>
            <img src={url} alt={title}/>

            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
