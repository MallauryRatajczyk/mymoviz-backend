var express = require('express');
var router = express.Router();

const APIkey = "f7737c2e4d49ec35dd80109589b8ecd2"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzczN2MyZTRkNDllYzM1ZGQ4MDEwOTU4OWI4ZWNkMiIsIm5iZiI6MTcyNzg2MDUzNS4xNTEzNTUsInN1YiI6IjY2ZmQwZWY1ZTI2YTUzYzEyMjU5NTJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wf47Heydw7RiukGILxxSyFRvsGYiBTXPS28hXU0qHZ4"

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.results.slice(0, 2));
            res.json({ movies: data.results })
        })

})

router.get('/movies/:title', (req, res) => {
    console.log(req.params.title)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${req.params.title}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return (data)
        })

})

router.get('/movies2', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            return (data.results)
        })

})

module.exports = router;
