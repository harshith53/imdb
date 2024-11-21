// const express =require('express');
// const cors = require('cors');
// const app = express();
// const port = 3002;

// app.use(cors())
// app.use(express.json());


// let movies =[
    
//     { id: 1, title: 'Inception', year: 2010 },
//     { id: 2, title: 'The Dark Knight', year: 2008 },
//     { id: 3, title: 'Interstellar', year: 2014 }


// ];
// let bookmarkmovies =[];

// app.get('/movies',(req,res)=> {
//     res.json(movies);
// });

// app.post('/bookmark',(req,res)=>{
//     const movieid =req.body.id;
//     const movie =movies.find(m=>m.id=== movieid);
//     if(movie && !bookmarkmovies.find(m=>m.id===movieid)){
//         bookmarkmovies.push(movie)

//     }
//     res.json({ sucess: true ,bookmarkmovies})

// });

// app.get('/mymovies',(req,res)=>{
//     res.json(bookmarkmovies);
// });

// app.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
// const app = express();
// const port = 3002;

app.use(cors())

app.use(express.json());

let movies = [
  { id: 1, title: '3 Idiots', year: 2009, isBookmarked: false },
  { id: 2, title: 'Inception', year: 2010, isBookmarked: false },
  { id: 3, title: 'Baahubali: The Beginning', year: 2015, isBookmarked: false },
  { id: 4, title: 'The Shawshank Redemption', year: 1994, isBookmarked: false },
  { id: 5, title: 'Dangal', year: 2016, isBookmarked: false },
  { id: 6, title: 'The Dark Knight', year: 2008, isBookmarked: false },
  { id: 7, title: 'Sholay', year: 1975, isBookmarked: false },
  { id: 8, title: 'Forrest Gump', year: 1994, isBookmarked: false },
  { id: 9, title: 'Lagaan', year: 2001, isBookmarked: false },
  { id: 10, title: 'The Godfather', year: 1972, isBookmarked: false },
  { id: 11, title: 'Swades', year: 2004, isBookmarked: false },
  { id: 12, title: 'Titanic', year: 1997, isBookmarked: false },
  { id: 13, title: 'Drishyam', year: 2015, isBookmarked: false },
  { id: 14, title: 'The Matrix', year: 1999, isBookmarked: false },
  { id: 15, title: 'PK', year: 2014, isBookmarked: false },
  { id: 16, title: 'Interstellar', year: 2014, isBookmarked: false },
  { id: 17, title: 'Kabhi Khushi Kabhie Gham', year: 2001, isBookmarked: false },
  { id: 18, title: 'The Avengers', year: 2012, isBookmarked: false },
  { id: 19, title: 'Gully Boy', year: 2019, isBookmarked: false },
  { id: 20, title: 'Parasite', year: 2019, isBookmarked: false },
  { id: 21, title: 'Padmaavat', year: 2018, isBookmarked: false },
  { id: 22, title: 'Avatar', year: 2009, isBookmarked: false },
  { id: 23, title: 'Kantara', year: 2022, isBookmarked: false },
  { id: 24, title: 'The Lion King', year: 1994, isBookmarked: false },
  { id: 25, title: 'RRR', year: 2022, isBookmarked: false },
  { id: 26, title: 'Spider-Man: No Way Home', year: 2021, isBookmarked: false },
  { id: 27, title: 'Chennai Express', year: 2013, isBookmarked: false },
  { id: 28, title: 'Joker', year: 2019, isBookmarked: false },
  { id: 29, title: 'Zindagi Na Milegi Dobara', year: 2011, isBookmarked: false },
  { id: 30, title: 'The Pursuit of Happyness', year: 2006, isBookmarked: false }
];


let bookmarkedMovies = [];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.post('/bookmark', (req, res) => {
  const { id } = req.body;
  const movie = movies.find(m => m.id === id);
  if (movie && !bookmarkedMovies.includes(movie)) {
    bookmarkedMovies.push(movie);
    movie.isBookmarked = true;
  }
  res.status(200).send('Bookmarked successfully');
});

app.get('/mymovies', (req, res) => {
  res.json(bookmarkedMovies);
});

app.post('/unbookmark', (req, res) => {
  const { id } = req.body;
  bookmarkedMovies = bookmarkedMovies.filter(m => m.id !== id);
  const movie = movies.find(m => m.id === id);
  if (movie) movie.isBookmarked = false;
  res.status(200).send('Unbookmarked successfully');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5001');
});
