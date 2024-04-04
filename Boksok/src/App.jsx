import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import SearchResults from './components/SearchResults';
import Layout from './components/Layout';
import '../src/style/main.scss'

function App() {
  // variabel til API og henting av data
  const [books, setBooks] = useState([])

  // variabel som holder på søkeordene hentet fra inputfeltet og med startverdi som James Bond
  const [query, setQuery] = useState("James+Bond")

  // state som gir bruker en ventemelding mens API henter data
  const [loading, setLoading] = useState(false)

  // getBooks henter data fra API
const getBooks = async() =>{
  fetch(`https://openlibrary.org/search.json?title=${query}`)
  .then(response => response.json())
  .then(data => setBooks(data.docs))
  .catch(error => console.error(error))
}
      
  // useEffect som kjører getBooks
  useEffect(() => {
        getBooks();
}, [query]);


  return (
    <>
    <Layout>
      {loading ? <p> Getting data from OpenLibary. Please wait...</p> : (
        <Routes>
        <Route path='/' element={<SearchResults books={books} query={query} setQuery={setQuery} getBooks={getBooks}/>} />
      </Routes>)}
    </Layout>
    </>
  )
}

export default App