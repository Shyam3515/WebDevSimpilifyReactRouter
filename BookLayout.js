import { useState } from "react";
import { Link, Outlet,useSearchParams } from "react-router-dom";

export default function BookLayout(){
    const [searchParams,setSearchParams] = useSearchParams({n:3})
    const number = searchParams.get('n');
    return(
        <>
            <Link to="/books/1">Book 1</Link><br />
            <Link to="/books/2">Book 2</Link><br />
            <Link to="/books/new">New Book</Link><br />
            <Link to={`/books/${number}`}>Book {number}</Link>

            {/* Outlet is a really simple component, you don't need to pass anything at all, it just renders whatever the current route is. */}
            <Outlet context={{hello : 'world'}}/>

            <input type="number" value={number} 
            onChange={e => setSearchParams({n:e.target.value})}
            />
        </>
    )
}