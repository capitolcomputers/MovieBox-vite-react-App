import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';
import Movies from '../src/components/Movies';
import FormInput from './components/FormInput';
import Footer from './components/Footer';

const API_KEY =  import.meta.env.VITE_REACT_APP_MOVIE_API_KEY

const API_ENDPOINT = 'https://www.omdbapi.com'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [renderedError, setRenderedError] = useState('');
    const [searchTerm, setSearchTerm] = useState('fun');

  
  const fetchMovies = async (query) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}?apikey=${API_KEY}&s=${query}`
      );
      const data = await response.json();
      console.log(data)
      setData(data)

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
    // const searchTerm = 'love';
    fetchMovies(searchTerm);
  }, []);

   const handleFormSubmit = (e) => {
     e.preventDefault();
     fetchMovies(searchTerm);
   };

 
  // if(loading) {
  //   return (
  //     <div className="loading">
  //     </div>
  //   )
  // }

  return (
    <>
      <header className='header_container'>
        <div className='logo__brand'>
          <h2 className='brand__name'>
            MOVIE {} <span className='brand__name-alt'>BOX</span>
          </h2>
        </div>

        <FormInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleFormSubmit={handleFormSubmit}
        />
      </header>
      <section className='movies__section'>
        {/* conditional rendering from the async */}
        {data.Response === 'True' ? (
          <Movies data={data} />
        ) : (
          <div className='loading__box'>
            <div className='loading'></div>
            <p className='loading_text'>Loading...</p>
            <p>{renderedError}</p>
          </div>
        )}
      </section>
      {/* Footer for the page */}
      <Footer />
    </>
  );
}
export default App
