import './App.css';
import {Link, NavLink, Route,Routes, useLocation} from "react-router-dom";
import Home from './pages/Home';
import Book from './pages/Book';
import BookList from './pages/BookList';
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';

function App() {
  {/* Our index path right here will just have 'single slash' because we are saying, hey this is our root path of our application, and then we need to define the component for that application that is what the element is for. And in the element you can pass any type of jsx you want.
    So, whatever is inside of this element is what gets rendered out to your page*/}

    {/*Lets wrap all this inside a fragment, so we can render multiple things. I'm going to render navBar at the top of our screen, and we are going to put this inside of an unordered list. */}
    
    const location = useLocation();
  return (
    <>
    {/* here we hardcoded our location to be /books */}
    <Routes location={'/books'}>
      <Route path='/books' element={<h1>Extra Content</h1>}/>
    </Routes>
    <nav>
      <ul>
        {/* Navlink is similar to link, but it has some additional properties like style,class and children properties, and these functions has isActive Class */}
        <li><NavLink style={({isActive}) => 
          {return isActive?{color:'red'} : {}
        }} 
          to="/">Home</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>{/*This /books route goes to my BookList component */}
      </ul>
    </nav>
    {location.state}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/*' element={<BookRoutes/>}/>
      {/* If none of the routes are matched, then this is going to match every single time. */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
  
}

export default App;
