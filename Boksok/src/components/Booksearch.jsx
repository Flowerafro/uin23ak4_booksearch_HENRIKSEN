import { useState } from "react"

export default function bookSearch({books, setQuery}) {

    // useState: variabel som holder på søkeordene hentet fra inputfeltet, som endres når brukeren skriver. 
    const [search, setSearch] = useState("")

    // handleSubmit: funksjon som hindrer refresh av siden (preventDefault)
    // Deretter sjekker om søkefeltet er tomt eller inneholder mindre enn 3 tegn, slik at søket skal ikke returnere resultater før brukeren har skrevet minimum tre tegn i søkefeltet (bruker får feilmelding).
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (search === "" || search.length < 3) {
            alert("Please enter a search word and ensure it has three or more characters to find a book");
        } else {
            setQuery(search);
        }
    }

    // handleChange: oppdaterer komponentet ut i fra gjeldende verdi i inputfeltet (søkefelt)
    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    console.log("bøker", books)
    
    return(
    <>
    <section className='search'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Find your book here" onChange={handleChange}></input>
            <button type='submit'>search</button>
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
                {item.isbn?.[0] && <a href={`https://www.amazon.com/s?k=${item.isbn[0]}`} target="_blank">Buy me at Amazon</a>} 
            </ul>
        </article>
        )}
    </section>
    </>)
}

/* AMAZON LINK: I API finnes det ingen amazon_id/id_amazon, og de som har det har tomme verdier. 
For å få denne til å  fungere har jeg referert til første index i isbn-arrayet (Forhåpentligvis har alle et isbn-nr på første index),
og lagt inn en betingelse om at om både isbn og index 0 finnes så skal <a href osv> printes*/
