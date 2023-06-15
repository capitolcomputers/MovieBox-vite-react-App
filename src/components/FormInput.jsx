import React, { useState } from 'react';

function FormInput({ fetchMovies }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className='form-form'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Enter a movie title...'
      />
      <button className='bbtn' type='submit' onClick={handleFormSubmit}>
        Search
      </button>
    </form>
  );
}

export default FormInput;
