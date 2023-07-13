import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;
const API_ENDPOINT = 'https://www.omdbapi.com';

function MoviesInfo({ movieId, onClick }) {
  const [movieInformation, setMovieInformation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINT}?apikey=${API_KEY}&i=${movieId}`
        );
        const data = await response.json();
        setMovieInformation(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  if (loading) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    );
  }

    if (!movieInformation) {
      return null; // Render nothing if the movie information is not available yet
    }
    const {
      Poster: poster,
      Runtime: runtime,
      Year: year,
      Country: country,
      Plot: plot,
      Title: title,
      Language: language,
      Genre: genre,
      imdbRating: ratings,
    } = movieInformation;
  
  return (
    <>
      <div className='modal__content'>
        <div className='movie__onclick'>
          <img className='movie_details__img-poster' src={poster} alt={title} />
          <div className='movie__info'>
            <p className='overview'>Overview</p>
            <p className='plot'>{plot}</p>
            <p className='runtime'>
            
                <span className='static_G'> Genre:</span>
                <span className='dynamic_G'> {genre}
                </span>
          
            </p>
            <p className='runtime'>
              <span className='static_r'> Ratings:</span>
              <span className='dynamic_r'>{ratings}</span>
            </p>
            <p className='runtime'>
              <span className='static_Y'>Year:</span>{' '}
              <span className='dynamic_Y'>{year}</span>
            </p>
          </div>
        </div>
        <button className='modal__close' onClick={onClick}>
          Close
        </button>
      </div>
    </>
  );
}

export default MoviesInfo;

/* 
  BUG-Main-option-1
   {movieInformation.map((movieInfo, index) => {
        return (
          <div className='modal__content' key={index}>
              <div className='movie__onclick'>
                <img
                  className='movie_details__img-poster'
                  src={poster}
                  alt={title}
                />
                <div className='movie__info'>
                  <h2>{title}</h2>
                  <p>{plot}</p>
                  <p>Runtime: {runtime}</p>
                  <p>Country: {country}</p>
                  <p>Actors: {genre}</p>
                  <p className='red'> Ratings: {movieInformation.Ratings[1]}</p>
                  <p>Actors: {year}</p>
                </div>
              </div>
            <button className='modal__close' onClick={onClick}>
              Close
            </button>
          </div>
        );
    })}
  ---

  BUG-Option-2

  );
*/



























// import React, { useEffect, useState } from 'react';

// const API_KEY = import.meta.env.VITE_REACT_APP_MOVIE_API_KEY;
// const API_ENDPOINT = 'https://www.omdbapi.com';

// function MoviesInfo({ movieId }) {
//   const [movieInformation, setMovieInformation] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await fetch(
//           `${API_ENDPOINT}?apikey=${API_KEY}&i=${movieId}`
//         );
//         const data = await response.json();
//         console.log(data);
//         setMovieInformation(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovie();
//   }, [movieId]);

//   if (!movieInformation) {
//     return null; // Render nothing until the movie information is fetched
//   }

//   const {
//     Poster: poster,
//     Runtime: runtime,
//     Year: year,
//     Rated: rated,
//     Actors: actors,
//   } = movieInformation;

//   return (
//     <section className='clicked__information'>
//       <div className='clicked-info__image-div'>
//         <img src={poster} alt='poster' className='clicked-info__image' />
//       </div>
//       <div className='info__sub'>
//         <p className='info__sub__first-child'>
//           <span className='first-child_static'>Duration : {}</span>
//           <span className='first-child_dynamic'>
//           {runtime}
//           </span>
//         </p>
//         <p>{year}</p>
//         <p>{rated}</p>
//         <p>{actors}</p>
//       </div>

//       <button className="close-modal">

//       </button>
//     </section>
//   );
// }

// export default MoviesInfo;
