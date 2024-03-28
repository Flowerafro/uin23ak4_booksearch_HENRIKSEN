// SEARCH er komponentet med søkefunksjonen 
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function Search({books, setBookSearch, setCurrentId, currentId}) {

    //lokal state som holder på input-verdi
    const [inputValue, setInputValue] = useState('')

    //en state som tømmer siden før et søk
    //const [submit, setSubmit] = useState(false)

    const [result, setResult] = useState((books))

    //Effect som tømmer siden når søket fjernes
    useEffect(()=> {
        if (inputValue === '')
        {setResult(books)
        }}, [inputValue, books]) 
        
    //setSubmit(false): inputValue}, [inputValue])

    //funksjon som kalles når søkefeltet brukes
    const handleSeachInput = (e) => {
        setInputValue(e.target.value)
    }

    // funksjon som kalles når <form> sendes inn med klikk
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === '') {
            alert("Please enter a seach word to find a book") // hvis søkefeltet er tomt, gis det beskjed om det til bruker
        } else {
            setBookSearch(`James+Bond+${inputValue.replace(/\s/g, "+")}`) // oppdaterer boksøket når form er sendt inn
            setResult(books.filter(book => book.title.toLowerCase().includes(inputValue.toLowerCase())))
            //setSubmit(true) // setter submit til true - når det er søkt skal denne aktiveres
        }
        
    }

    //handleClick
    const handleClick = (id) => {
        setCurrentId(id)
        //localStorage.getItem("key", id)
    }

    // filtrerer ut søkeord fra API-listen
    //const sortBooks = books?.filter(book => book.title.toLowerCase().includes(inputValue.toLowerCase()))

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search book here:</label>
                <input type="text" id="search" placeholder='skriv her..' autoComplete='off' onChange={handleSeachInput} className='search'/>
                <button type='submit' className='btn'>search</button>
            </form>
                <ul>
                {result.map(item => <li key={item.key}><Link to={item.title} onClick={()=>handleClick(item.key)}>{item.title}</Link></li>)}
            </ul>
        
        </div>
        )
    
}