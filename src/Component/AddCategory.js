import React, {useState} from 'react'


function AddCategory( {setCategorias} ) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange= (e) =>{
        setInputValue( e.target.value);
    }

    const handleSumbit=(e) =>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setInputValue('');
            setCategorias(cat => [ inputValue,...cat] );
        }
        
    }

    return (
        <form onSubmit={handleSumbit}>
            <input type='text'
             value={inputValue}
             onChange={ handleInputChange }
             />
        </form>
    )
}

export default AddCategory
