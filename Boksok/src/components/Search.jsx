// SEARCH er komponentet med søkefunksjonen 
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search({books, setBookSearch, defaultSearch}) {
  
    // state til verdien i inputfeltet
    const [inputValue, setInputValue] = useState('')
    // state til søkeresultatet, som sier at default skal vise hele listen
    const [searchResult, setSearchResult] = useState([(books)])

    // handleSubmit håndterer selve søket: betingelser må møtes for at søket kan
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === "" || inputValue.length < 3 && inputValue.length > 0) {
            alert("Please enter a search word and ensure it has three or more characters to find a book")
        } 
        else {
            setBookSearch(`${defaultSearch}+${inputValue.replace(/\s/g, "+")}`)
        }
    }

    // "handleChange" sjekker om søkefeltet er tomt og om inputfelt har mindre enn 3 tegn, som gjør at resultatet dukker opp etter man har skreet inn 3 tegn
    //deretter setter den state til at hele søkelisten skal vises
    useEffect(()=> {
        if (inputValue === "" || inputValue.length < 3 && inputValue.length > 0) {
            setSearchResult(books)
        }
    }, [inputValue, books]) 

    // "handleClick": håndterer input i søkefeltet og setter state til det som skrives inn
    // toLowerCase unngår at søket blir case-sensitiv
    const handleSearchInput = (e) => {
        setInputValue(e.target.value)
        if(e.target.value.length >= 3) {
            setSearchResult(books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }

    // amazon_id: ut ifra API så ser det ut som at ikke alle bøker har en amazon_id, så jeg har lagt til en if-setning som sjekker om boken har en amazon_id, og hvis den har det så vil det dukke opp en knapp som leder til Amazon.com-søk
    return(
        <>
        <section className='search'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search book here:</label>
                <input type="text" id="search" placeholder='skriv her..' autoComplete='off' onChange={handleSearchInput} className='input'/>
                <button type='submit' className='btn'>search</button>
            </form>
        </section>
        <section className='bookList'>
                {searchResult.map((item, index) => 
                <article key={`${item.key}-${index}`}>
                    <h3>{item.title}</h3>
                    <img src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`} />
                    <ul>
                    <li>{item.first_publish_year}</li>
                        <li>{item.author_name}</li>
                        <li>{item.average_rating || 'No rating available'}</li>
                        {item.id_amazon ? <a href={`https://www.amazon.com/s?k=${item.id_amazon}`} target='_blank'></a> : null} 
                    </ul>
                </article>
                )}
        </section>
        </>
        )
}