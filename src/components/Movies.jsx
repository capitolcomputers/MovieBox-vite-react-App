import React from 'react';

function Movies({ data }) {
  const {Search: movies} = data
  return (
    <div className='movie__parent_element'>
      {movies.map((movie, index) => (
        <div key={index} className='each_movie_info'>
          <div>
            <img src={movie.Poster} alt='movie.Title' className='movie_img' />
          </div>
          <h2 className='titles'> Movie Title:{movie.Title}</h2>
          
          <p className='date'>Release Date:{movie.Year}</p>
          <button className='moviebutton'> View More</button>
        </div>
      ))}
    </div>
  );
}

export default Movies;