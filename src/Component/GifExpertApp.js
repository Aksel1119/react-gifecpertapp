import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpertApp() {


const [categorias, setCategorias] = useState(['Dragon-Ball']);

// const handleAdd = () =>{
//   setCategorias( [...categorias, 'Nuevo item'] );
// }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>

            <ol>
                {categorias.map( (categoria) =>(
                    <GifGrid key={categoria} categoria={categoria}/>
                   
                ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
