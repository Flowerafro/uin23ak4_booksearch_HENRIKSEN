// HOME er komponentet /"landingssiden" som viser opplisting av bøker om James Bond hentet fra API

import React, { useEffect } from 'react'
import Search from './Search'

export default function Home({setBookSearch, books, defaultSearch}) {

    //Setter bookSearch til James+Bond når komponentet mountes
    useEffect(() => {
        setBookSearch(defaultSearch)
    }, [])

    return (
        <>
        <section>
            {books?.map(item =>
                <article key={item.key}>
                    <h3>{item.title}</h3>
                    <ul>
                        <li>{item.first_publish_year}</li>
                        <li>{item.author_name}</li>
                        <li>{item.ratings_average}</li>
                    </ul>
                </article>)}
        </section>
        </>
    )
}


