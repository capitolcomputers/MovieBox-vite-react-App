import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';
import Movies from '../src/components/Movies';
import FormInput from './components/FormInput';
import Footer from './components/Footer';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_REACT_APP_MOVIE_API_KEY
  }`;
console.log(API_ENDPOINT);

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [renderedError, setRenderedError] = useState('');
  
  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.Response === 'False') {
        setRenderedError(data.Response);
        setLoading(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Default movie title
    const searchTerm = 'love';

    const url = `${API_ENDPOINT}&s=${searchTerm}`;
    fetchMovies(url);
  },[ fetchMovies]);
 
  if(loading) {
    return (
      <div className="loading">
      </div>
    )
  }
  return (
    <>
      <header className="header_container">
        <div className="logo__brand">
          <h2>PRIME {} <span className='brand__name'>MOVIE</span></h2>
        </div>
      <FormInput fetchMovies={fetchMovies} />
      </header>
      {/* conditional rendering from the async */}
      {data && data.Response === 'True' ? (
        <Movies data={data.Search} />
      ) : (
        <p className='error__result'>{renderedError} </p>
      )}
      {/* Footer for the page */}
      <Footer />
    </>
  );
}
export default App
