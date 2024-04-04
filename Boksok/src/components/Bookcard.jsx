// bookCard som innholder listevisning av en bok (for både søkeresultater og forsiden)
import React from 'react'

export default function BookCard({item, index}) {
    return (
       <React.Fragment key={`${item.key}-${index}`}>
        <article>
             {item.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} />) : (<p className="noimage">No image available</p>)}
            <h3>{item.title}</h3>
            <p>Published: {item.first_publish_year}</p>
            <p>Rating: {item.average_rating || 'No rating available'}</p>
            <ul>
                {item.author_name?.map((author, index) => <li key={index}>{author}</li>)}   
            </ul>
            {item.isbn?.[0] ? <a href={`https://www.amazon.com/s?k=${item.isbn[0]}`} target="_blank">Buy me at Amazon</a> : null} 
        </article>
</React.Fragment>
        
    )
}
