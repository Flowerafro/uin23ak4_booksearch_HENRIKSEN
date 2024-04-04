
//"searchresults", som lister opp søkeresultater i "bookcards"
import { useState } from "react"
import BookCards from "./BookCards"

export default function SearchResults({books, setQuery}) {

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
    
    return(
    <>
    <section className='bookSearch'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="  search.." onChange={handleChange}></input>
            <button type='submit'>search</button>
        </form>
    </section>
    <BookCards books={books} />
    </>)
} 

/* AMAZON LINK: I API finnes det ingen amazon_id/id_amazon, og de som har det har tomme verdier. 
For å få denne til å  fungere har jeg referert til første index i isbn-arrayet (Forhåpentligvis har alle et isbn-nr på første index),
og lagt inn en betingelse om at om både isbn og index 0 finnes så skal <a href osv> printes*/

/* Bilde fra pixabay: Image by <a href="https://pixabay.com/users/luboshouska-198496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1204029">Lubos Houska</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1204029">Pixabay</a> */
