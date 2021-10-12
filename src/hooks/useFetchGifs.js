import {useState, useEffect} from 'react'
import { getGif } from '../helpers/getGifs';

export const  useFetchGifs=( categoria) => {
   
const [state, setstate] = useState({
    data:[],
    loading: true
});  

useEffect( () =>{
    
    getGif( categoria)
    .then( img =>{
        setstate({
            data:img,
            loading: false
        });
    })
     }, [categoria])

return state;

}


