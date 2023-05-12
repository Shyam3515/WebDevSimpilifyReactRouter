import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookLayout from './BookLayout';
import Book from './pages/Book';
import BookList from './pages/BookList';
import NewBook from './pages/NewBook';

export default function BookRoutes() {
  return (
        <Routes>
          {/* Nested Routes makes it really easy for you to combine multiple different routes together */}
            <Route element={<BookLayout/>}>
                <Route index element={<BookList />}/> {/*This matches the parent route with index true. */}
                <Route path=':id' element={<Book />}/>
                <Route path='new' element={<NewBook />}/>
            </Route>
        </Routes>
  )
}
