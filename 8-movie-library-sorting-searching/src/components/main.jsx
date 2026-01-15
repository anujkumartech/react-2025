import { useState } from 'react'

const movies = [
  { id: 1, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, watched: true, priority: 'Must Watch' },
  { id: 2, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, watched: true, priority: 'Must Watch' },
  { id: 3, title: 'The Hangover', genre: 'Comedy', year: 2009, rating: 7.7, watched: false, priority: 'Recommended' },
  { id: 4, title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, watched: true, priority: 'Must Watch' },
  { id: 5, title: 'Superbad', genre: 'Comedy', year: 2007, rating: 7.6, watched: false, priority: 'Skip' },
  { id: 6, title: 'John Wick', genre: 'Action', year: 2014, rating: 7.4, watched: false, priority: 'Recommended' },
  { id: 7, title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7, watched: true, priority: 'Must Watch' },
  { id: 8, title: 'Gladiator', genre: 'Action', year: 2000, rating: 8.5, watched: false, priority: 'Recommended' },
  { id: 9, title: 'Step Brothers', genre: 'Comedy', year: 2008, rating: 6.9, watched: true, priority: 'Skip' },
  { id: 10, title: 'Avatar', genre: 'Sci-Fi', year: 2009, rating: 7.9, watched: false, priority: 'Recommended' },
]

const priorityOrder = { 'Must Watch': 1, 'Recommended': 2, 'Skip': 3 }

export const Main = () => {
  const [sortField, setSortField] = useState('title')
  const [sortDirection, setSortDirection] = useState('asc')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedGenres, setSelectedGenres] = useState([])
  const [yearRange, setYearRange] = useState({ min: 1990, max: 2025 })
  const [minRating, setMinRating] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [showWatchedOnly, setShowWatchedOnly] = useState(false)

  const genres = [...new Set(movies.map(m => m.genre))]

  const handleGenreCheckbox = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    )
  }

  const clearAllFilters = () => {
    setSelectedGenre('all')
    setSelectedGenres([])
    setYearRange({ min: 1990, max: 2025 })
    setMinRating(0)
    setSearchText('')
    setShowWatchedOnly(false)
  }
//  { id: 1, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, watched: true, priority: 'Must Watch' },
  let filteredMovies = movies.filter(movie => { // return boolean true OR false
    if (selectedGenre !== 'all' && movie.genre !== selectedGenre) return false
    if (selectedGenres.length > 0 && !selectedGenres.includes(movie.genre)) return false
    if (movie.year < yearRange.min || movie.year > yearRange.max) return false
    if (movie.rating < minRating) return false
    if (searchText && !movie.title.toLowerCase().includes(searchText.toLowerCase())) return false
    if (showWatchedOnly && !movie.watched) return false
    return true
  })
//  { id: 1, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, watched: true, priority: 'Must Watch' }
  let sortedMovies = [...filteredMovies].sort((a, b) => { // return something like a - b: number
    let comparison = 0
    if (sortField === 'title') {
      comparison = a.title.localeCompare(b.title)
    } else if (sortField === 'year') {
      comparison = a.year - b.year
    } else if (sortField === 'rating') {
      comparison = a.rating - b.rating
    } else if (sortField === 'priority') {
      comparison = priorityOrder[a.priority] - priorityOrder[b.priority]
    } else if (sortField === 'genre-rating') {
      comparison = a.genre.localeCompare(b.genre) || b.rating - a.rating
    }
    return sortDirection === 'asc' ? comparison : -comparison
  })

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', maxWidth: 900, margin: '0 auto' }}>
      <h1>Movie Library</h1>

      <div style={{ background: '#000', padding: 15, borderRadius: 8, marginBottom: 20 }}>
        <h3 style={{ marginTop: 0 }}>Sorting</h3>
        <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center' }}>
          <label>
            Sort By:
            <select value={sortField} onChange={e => setSortField(e.target.value)} style={{ marginLeft: 5 }}>
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="rating">Rating</option>
              <option value="priority">Priority (Custom)</option>
              <option value="genre-rating">Genre then Rating (Multi-field)</option>
            </select>
          </label>
          <label>
            Direction:
            <select value={sortDirection} onChange={e => setSortDirection(e.target.value)} style={{ marginLeft: 5 }}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      <div style={{ background: '#000', padding: 15, borderRadius: 8, marginBottom: 20 }}>
        <h3 style={{ marginTop: 0 }}>Filtering</h3>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 15 }}>
          <label>
            Single Select Genre:
            <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)} style={{ marginLeft: 5 }}>
              <option value="all">All</option>
              {genres.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </label>

          <div>
            Multi-Select Genre:
            {genres.map(g => (
              <label key={g} style={{ marginLeft: 10 }}>
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(g)}
                  onChange={() => handleGenreCheckbox(g)}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 15 }}>
          <label>
            Year Min:
            <input
              type="number"
              value={yearRange.min}
              onChange={e => setYearRange(prev => ({ ...prev, min: Number(e.target.value) }))}
              style={{ width: 70, marginLeft: 5 }}
            />
          </label>
          <label>
            Year Max:
            <input
              type="number"
              value={yearRange.max}
              onChange={e => setYearRange(prev => ({ ...prev, max: Number(e.target.value) }))}
              style={{ width: 70, marginLeft: 5 }}
            />
          </label>
          <label>
            Min Rating:
            <input
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={minRating}
              onChange={e => setMinRating(Number(e.target.value))}
              style={{ width: 60, marginLeft: 5 }}
            />
          </label>
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <label>
            Search:
            <input
              type="text"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              placeholder="Search by title..."
              style={{ marginLeft: 5, padding: 5 }}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={showWatchedOnly}
              onChange={e => setShowWatchedOnly(e.target.checked)}
            />
            Show Watched Only
          </label>
          <button onClick={clearAllFilters}>Clear All Filters</button>
        </div>
      </div>

      <p>Showing {sortedMovies.length} of {movies.length} movies</p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#333', color: 'white' }}>
            <th style={{ padding: 10, textAlign: 'left' }}>Title</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Genre</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Year</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Rating</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Priority</th>
            <th style={{ padding: 10, textAlign: 'left' }}>Watched</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map(movie => (
            <tr key={movie.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: 10 }}>{movie.title}</td>
              <td style={{ padding: 10 }}>{movie.genre}</td>
              <td style={{ padding: 10 }}>{movie.year}</td>
              <td style={{ padding: 10 }}>{movie.rating}</td>
              <td style={{ padding: 10 }}>{movie.priority}</td>
              <td style={{ padding: 10 }}>{movie.watched ? '✓' : '✗'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}