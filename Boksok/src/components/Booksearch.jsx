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
        <h2>James Bond books</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for books here:</label>
            <input type="text" id="search" placeholder="Søk her" onChange={handleChange}></input>
            <button type='submit' className='btn'>search</button>
        </form>
    </section>
    <section className='bookList'>
        {books?.map((item, index) => 
        <article key={`${item.key}-${index}`}>
            <h3>{item.title}</h3>
            <img src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-L.jpg`} />
            <ul>
                <li>{item.first_publish_year}</li>
                <li>{item.author_name}</li>
                <li>{item.average_rating || 'No rating available'}</li>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} />
                {item.isbn?.map(i => <a href={`https://www.amazon.com/s?k=${i}`} target="_blank"></a>)}
            </ul>
        </article>
        )}
    </section>
    </>)
}