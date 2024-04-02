import { useState } from "react"
import { Link } from "react-router-dom"
export default function bookSearch({books, query, setQuery}) {

    // variabel som holder på søkeordene hentet fra inputfeltet, som endres når brukeren skriver. 
    const [search, setSearch] = useState("")

    // når bruker trykker på søk-knappen hindrers refresh av siden (preventDefault)
    // deretter sjekker om søkefeltet er tomt eller inneholder mindre enn 3 tegn og til slutt oppdaterer query med søkeordet
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (search === "" || search.length < 3) {
            alert("Please enter a search word and ensure it has three or more characters to find a book");
        } else {
            setQuery(search);
        }
    }

    // når bruker skriver inn i søkefeltet
    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    console.log("bøker", books)
    
    return(
    <>
    <section className='search'>
        <h2>Book search</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for books here:</label>
            <input type="text" id="search" placeholder="Find your book here" onChange={handleChange}></input>
            <button type='submit' className='btn'>search</button>
        </form>
    </section>
    <section className='bookList'>
        {books?.map((item, index) => 
        <article key={`${item.key}-${index}`}>
             {item.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} />) : (<p className="noimage">No image available</p>)}
            <h3>{item.title}</h3>
            <ul>
                <li>Published: {item.first_publish_year}</li>
                <li>Author: {item.author_name}</li>
                <li>Rating: {item.average_rating || 'No rating available'}</li>
                {item.isbn?.[0] && <a href={`https://www.amazon.com/s?k=${item.isbn[0]}`} target="_blank">Buy me!</a>} 
            </ul>
            
        </article>
        )}
    </section>
    </>)
}

/* AMAZON LINK: I API finnes det ingen amazon_id/id_amazon, og de som har det har tomme verdier. 
For å få denne til å  fungere har jeg referert til første index i isbn-arrayet (Forhåpentligvis har alle et isbn-nr på første index),
og lagt inn en betingelse om at om både isbn og index 0 finnes så skal <a href osv> printes*/

/* 
{item.cover_i ? (
                                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="Book cover" />
                            ) : (
                                <p>No image available</p>
                            )}
*/
