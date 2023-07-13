import React, { useState } from 'react';
import MoviesInfo from './MoviesInfo';

function Movies({ data }) {

  const { Search: movies } = data;
  
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewMore = (movieId) => {
    setSelectedMovieId(movieId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMovieId(null);
    setShowModal(false);
  };

  return (
    <div className='movie__parent_element'>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className={showModal ? 'each_movie_info filter' : 'each_movie_info'}
        >
          {/* <div className='eachmovie__box'> */}
            <img src={movie.Poster} alt={movie.Title} className='movie_img' />
            <button
              className='moviebutton__close'
              onClick={() => handleViewMore(movie.imdbID)}
            >
              View More
            </button>
          </div>
        // </div>
      ))}

      {showModal && selectedMovieId && (
        <div className='modal__container'>
          <div className='modal__backdrop'>
            <MoviesInfo movieId={selectedMovieId} onClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
