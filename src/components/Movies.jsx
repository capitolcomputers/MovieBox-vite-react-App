import React, { useState } from 'react';
import MoviesInfo from './MoviesInfo';
import MoviesList from './MoviesList';

function Movies({ data }) {
  const { Search: movies } = data;
  const [isMoreInfoVisible, setMoreInfoVisible] = useState(false);


  return (
    <div className='movie__parent_element'>
      {movies.map((movie, index) => (
        <div key={index} className='each_movie_info'>
          <div className='eachmovie__box'>
            <img src={movie.Poster} alt='movie.Title' className='movie_img' />
          </div>
          <button
            key={movie.imdbID}
            className='moviebutton'
            onClick={() => setMoreInfoVisible(true)}
          >
            {' '}
            View More
          </button>
          {isMoreInfoVisible && <MoviesList idInfo={movie.imdbID} />}
        </div>
      ))}
      {/* Wondering how i can make the info on each id, i.e the individual button that was clicked as per its key information and not all info showing when a btn is clicked. but rather the info of the PARTICULAR clicked btn */}
    </div>
  );
}

export default Movies;