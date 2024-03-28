import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

import Home from './components/Home';
import Search from './components/Search';
import Layout from './components/Layout';

//import './App.css'
import '../src/style/main.scss'


function App() {

  // variabel til API og henting av data
  const [books, setBooks] = useState([])

  // variabel som holder på søkeordene og setter state til at James Bond-bøker skal listes opp på siden
  const [bookSearch, setBookSearch] = useState('James+Bond')

  //currentID
  const [currentId, setCurrentId] = useState("")

    const getBooks = async () => {
        try{
            const response = await fetch(`https://openlibrary.org/search.json?title=${bookSearch}`)
            const data = await response.json()
            console.log(data)
            setBooks(data.docs); // først hadde jeg data.results men det gir undefined. I konsoll-loggen ser jeg at det ikke er en results, men docs. Når jeg endret dette til docs fikk jeg tak i 
        } catch (error) {
            console.log(error)
        }
    }

    // kjører getBooks (henter data fra API) og [bookSearch] 
    useEffect(()=>{
        getBooks()
        //setCurrentId(localStorage.getItem("key"))
    }, [bookSearch])

    console.log(books, bookSearch);

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home books={books} setBookSearch={setBookSearch}  />} />
        <Route path='/search' element={< Search books={books} bookSearch={bookSearch} setBookSearch={setBookSearch} setCurrentId={setCurrentId} currentId={currentId}/>} />
      </Routes>
    </Layout>
      
    </>
  )
}

export default App
