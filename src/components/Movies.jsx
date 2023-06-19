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
            <button
              className='moviebutton'
              onClick={() => setMoreInfoVisible(true)}
            >
              {' '}
              View More
            </button>
            {isMoreInfoVisible && <MoviesList idInfo={movie.imdbID} />}
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Movies;