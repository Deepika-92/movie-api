/* eslint-disable max-len */
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMByTitleOrDirector = (request, response) => {
  const { search } = request.params

  const foundTitle = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.directors.find(director => director.toLowerCase().includes(search.toLowerCase()))
  })

  return response.send(foundTitle)
}

module.exports = {
  getAllMovies,
  getMByTitleOrDirector
}
