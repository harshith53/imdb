// import React from 'react'
// import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
// import Home from './components/Home';
// import Movies from './components/Movies';
// import Mymovies from './components/Mymovies';
// import './App.css';



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/movies" element={<Movies/>}/>
//         <Route path="/mymovies" element={<Mymovies/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Mymovies from './components/Mymovies';
import './router.css';
import './App.css'

function App() {
  return (
    <div className="router-container">
      <Router>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/movies">Movies</a>
          <a href="/mymovies">My Movies</a>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/mymovies" element={<Mymovies />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
