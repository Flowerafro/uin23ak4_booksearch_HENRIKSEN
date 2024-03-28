// HOME er komponentet /"landingssiden" som viser opplisting av bøker om James Bond hentet fra API
import Search from './Search';
import React, { useEffect } from 'react'

export default function Home({setBookSearch, books}) {

    //Setter bookSearch til James+Bond når komponentet mountes
    useEffect(() => {
        setBookSearch("James+Bond")
    }, [])

    return (
        <>
        <section>
            <h2>James Bond book list</h2>
            {books?.map(item =>
                <article key={item.key}>
                    <h2>{item.title}</h2>
                    <ul>
                        <li>{item.first_publish_year}</li>
                        <li>{item.author_name}</li>
                        <li>{item.ratings_average}</li>
                        <button>Amazon</button>
                    </ul>
                </article>)}
        </section>
        </>
    )
}

