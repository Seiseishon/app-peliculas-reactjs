import { useState } from 'react'
import './MovieApp.css'

export const MovieApp = () => {

    const [search, setSearch] = useState('')
    const [movieLists, setMovieLists] = useState(null)

    const URL = 'https://api.themoviedb.org/3/search/movie'
    const API = '07db2506287e20e1340c14549755e98c'
    const LANGUAGE = 'es-ES'

    const handleInputChange = ({ target }) => {
        setSearch(target.value)
        console.log(target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchMovieData()
    }

    const fetchMovieData = async () => {
        try {
            const responsive = await fetch(`${URL}?query=${search}&api_key=${API}&language=${LANGUAGE}`)
            const data = await responsive.json()
            setMovieLists(data.results)
        } catch (error) {
            console.error("Ha ocurrido el siguiente error: ", error)
        }
    }

    return (
        <div className='container'>
            <h1>Buscador de Peliculas</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Escribí una pelicula'
                    value={search}
                    onChange={handleInputChange}
                />
                <button>Buscar</button>
            </form>
            {movieLists &&
                <div className='movie-list'>

                    {movieLists.map(movie => (
                        <div key={movie.id} className='movie-card'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    ))}

                </div>
            }

        </div>
    )
}
