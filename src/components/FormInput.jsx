import React, { useState } from 'react';

function FormInput({ searchTerm, setSearchTerm, handleFormSubmit }) {

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className='form-form'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        id='input'
        placeholder='Enter a movie title...'
      />
      <button className='bbtn' type='submit'>
        Search
      </button>
    </form>
  );
}

export default FormInput;
