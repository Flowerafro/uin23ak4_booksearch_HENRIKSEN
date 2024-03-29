import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

import Home from './components/Home';
import Search from './components/Search';
import Layout from './components/Layout';

import '../src/style/main.scss'

function App() {

  // default søkeord slik at det hentes inn bøker kun fra James Bond fra API
  const DEFAULT_SEARCH = 'James+Bond'

  // variabel til API og henting av data
  const [books, setBooks] = useState([])

  // variabel som holder på søkeordene og setter state til at James Bond-bøker skal listes opp på siden
  const [bookSearch, setBookSearch] = useState(DEFAULT_SEARCH)

  // state som gir bruker en ventemelding mens API henter data
  const [loading, setLoading] = useState(false)

    const getBooks = async () => {
        setLoading(true)
        try{
            const response = await fetch(`https://openlibrary.org/search.json?q=${bookSearch}`)
            const data = await response.json()
            console.log(data)
            setBooks(data.docs); // først hadde jeg data.results men det gir undefined. I konsoll-loggen ser jeg at det ikke er en results, men docs. Når jeg endret dette til docs fikk jeg tak i 
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    // kjører getBooks (henter data fra API) og [bookSearch] 
    useEffect(()=>{
        getBooks()
    }, [bookSearch])

    console.log(books, bookSearch);

  return (
    <>
    <Layout>
      {loading ? <p> Getting data from OpenLibary. Please wait...</p> : (
        <Routes>
        <Route path='/' element={<Home books={books} setBookSearch={setBookSearch} defaultSearch={DEFAULT_SEARCH} />} />
        <Route path='/search' element={< Search books={books} bookSearch={bookSearch} setBookSearch={setBookSearch} defaultSearch={DEFAULT_SEARCH}/>} />
      </Routes>)}
      
    </Layout>
      
    </>
  )
}

export default App
