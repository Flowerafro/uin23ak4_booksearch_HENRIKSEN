// SEARCH er komponentet med søkefunksjonen 
import React, { useEffect, useState } from 'react'

export default function Search({books, setBookSearch, defaultSearch}) {
  
    // state til verdien i inputfeltet
    const [inputValue, setInputValue] = useState('')
    // state til søkeresultatet, som sier at default skal vise hele listen
    const [searchResult, setSearchResult] = useState([(books)])

    // sjekker om søkefeltet er tomt og om inputfelt har mindre enn 3 tegn, som gjør at resultatet dukker opp etter man har skreet inn 3 tegn
    //deretter setter den state til at hele søkelisten skal vises
    useEffect(()=> {
        if (inputValue === '' || inputValue.length < 3) {
            setSearchResult(books)
        }
    }, [inputValue, books]) 

    // håndterer input i søkefeltet og setter state til det som skrives inn
    // toLowerCase unngår at søket blir case-sensitiv
    const handleSearchInput = (e) => {
        setInputValue(e.target.value)
        if(e.target.value.length >= 3) {
            setSearchResult(books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }

    // sjekker om søkefeltet er tomt (da skal det dukke opp en alert)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === '') {
            alert("Please enter a search word to find a book")
        } 
        else {
            setBookSearch(`${defaultSearch}+${inputValue.replace(/\s/g, "+")}`)
        }
    }

    // amazon_id: ut ifra API så ser det ut som at ikke alle bøker har en amazon_id, så jeg har lagt til en if-setning som sjekker om boken har en amazon_id, og hvis den har det så vil det dukke opp en knapp som leder til Amazon.com-søk
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search book here:</label>
                <input type="text" id="search" placeholder='skriv her..' autoComplete='off' onChange={handleSearchInput} className='search'/>
                <button type='submit' className='btn'>search</button>
            </form>
                
                {searchResult.map((item, index) => 
                <article key={`${item.key}-${index}`}>
                    <h3>{item.title}</h3>
                    <ul>
                    <li>{item.first_publish_year}</li>
                        <li>{item.author_name}</li>
                        <li>{item.average_rating || 'No rating available'}</li>
                        {item.id_amazon ? <a href={`https://www.amazon.com/s?k=${item.id_amazon}`} target='_blank'></a> : null} 
                    </ul>
                </article>
                
                )}
        </div>
        )
    
}



