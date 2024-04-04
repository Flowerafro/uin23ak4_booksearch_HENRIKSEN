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

  // henter data fra API
  // Hadde en del problemer med å hente inn API fra OpenLibary i påsken, så jeg la inn en if-statement på ikke-ok respons og en feilmelding :)
  const getBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`); 
        if (!response.ok) {
            throw new Error("Error fetching data from OpenLibrary API");
        } else {
            const data = await response.json();
            console.log(data);
            setBooks(data.docs);
        }
    } catch (error) {
        console.error("Error fetching data from OpenLibrary API", error);
    }
    setLoading(false);
}
      
  // kjører getBooks (henter data fra API) og [query]
  useEffect(()=>{
    getBooks()
  },[query])

  console.log("bøker", books)
  console.log("Q", query)

  return (
    <>
    <Layout>
      {loading ? <p> Getting data from OpenLibary. Please wait...</p> : (
        <Routes>
        <Route path='/' element={<SearchResults books={books} query={query} setQuery={setQuery}/>} />
      </Routes>)}
    </Layout>
    </>
  )
}

export default App