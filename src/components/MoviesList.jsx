import React,{useEffect, useState} from 'react'

const API_KEY = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;
const API_ENDPOINT = 'https://www.omdbapi.com';

function MoviesList({ idInfo }) {
  const [IdInformation, setIdInformation ] = useState([]);
  const [renderedState, setRenderedState] = useState(false);

  const fetchMovi = async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&i=${id}`);
      const data = await response.json();
      console.log(data);
      setIdInformation(data);
      setRenderedState(true)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovi(idInfo);
  }, []);

  // const [Poster, :poster, Runtime: runtime, Year: year, Rated: rated, Actors: actors] = IdInformation;
  const { Poster : poster, Runtime: runtime, Year: year, Rated: rated, Actors: actors } = IdInformation;

  return (
    <section className=''>
      {/* <img src={poster} alt='poster' /> */}
      <p>{runtime}</p>
      <p>{year}</p>
      <p>{rated}</p>
      <p>{actors}</p>

      {/* Wondering how i can make this info show on individual button that was clicked and not all info showing when a btn is clicked */}
    </section>
  );
}

export default MoviesList