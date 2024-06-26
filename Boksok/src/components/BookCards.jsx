// bookCards lister opp søkeresultater 
import BookCard from "./Bookcard.jsx";

export default function BookCards({books}) {
    return (
      
        <section className='bookCards' >
        {books?.map((item, index) => 
            <BookCard key={index} books={books} item={item} index={index} />
            )}
        </section>
    )
}
