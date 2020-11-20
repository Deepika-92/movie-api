const express = require('express')
const { getAllMovies, getMByTitleOrDirector } = require('./controllers/movies')

const app = express()


app.get('/movies', getAllMovies)

// request for a movie by title
app.get('/movies/:search', getMByTitleOrDirector)


app.all('*', (request, response) => {
  return response.status(404)
})
app.listen(1337, () => {
  console.log('listening on port 1337...') // eslint-disable-line no-console
})
