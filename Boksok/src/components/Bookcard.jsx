

export default function Bookcard({item}) {
    return (
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
    )
}
