//"searchresults", som lister opp søkeresultater i "bookcards"
import BookCards from "./BookCards"

export default function SearchResults({books, query, setQuery, getBooks}) {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        getBooks(query); 
    }

    //OnChange sjekker om det er skrevet inn mindre enn 3 karakterer og vil ikke returnere noe før det er skrevet inn minst 3 karakterer

    return(
    <>
    <section className='bookSearch'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="  search.." onChange={(e) => e.target.value.length > 2 && setQuery(e.target.value)}></input>
            <button type='button' onClick={()=> getBooks()}>search</button>
        </form>
    </section>
    <BookCards books={books} />
    </>)
}

/* AMAZON LINK: I API finnes det ingen amazon_id/id_amazon, og de som har det har tomme verdier. 
For å få denne til å  fungere har jeg referert til første index i isbn-arrayet (Forhåpentligvis har alle et isbn-nr på første index),
og lagt inn en betingelse om at om både isbn og index 0 finnes så skal <a href osv> printes*/

/* Bilde fra pixabay: Image by <a href="https://pixabay.com/users/luboshouska-198496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1204029">Lubos Houska</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1204029">Pixabay</a> */
