import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'


const App = () => {
  return (
    <Routes>
      <Route path='/books/' element={<Home/>} />
      <Route path='/books/newBook' element={<CreateBook/>} />
      <Route path='/books/' element={<ShowBook/>} />
      <Route path='/books/:id' element={<EditBook/>} />
      <Route path='/books/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App