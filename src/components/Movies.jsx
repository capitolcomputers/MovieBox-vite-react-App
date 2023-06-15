import React,{useEffect, useState} from 'react'

function Movies({data}) {
  const { Search } = data;
  console.log(Search);

  return (
    <>
      {Search.map((search, index) => {
        <div key={index}>
          <h2>{ Search}</h2>
        </div>
      })}
    </>
  )
}

export default Movies