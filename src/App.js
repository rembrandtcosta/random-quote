import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import quotes from './quotes.json';

function App() {
  const [quote, setQuote] = useState(1);
  const [author, setAuthor] = useState('1');
  const [index, setIndex] = useState(0);
  const cntQuotes = quotes.length;

  useEffect(() => {
    updateRandomIndex();
  }, []);

  useEffect(() => {
    setQuote(JSON.stringify(quotes[index].quote));
    setAuthor(quotes[index].author); 
  }, [index]);

  const updateRandomIndex = () => {
    setIndex(Math.floor(Math.random() * (cntQuotes-1)));
  }

  const getTwitterURL = () => {
    return "https://twitter.com/intent/tweet?text=" + quote + " --" + author;
  }

  return (
    <div className="container">
      <div id="quote-box" className="container-sm">
        <div className="col col-12 p-0 min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
          <div className='row'>
          <div className='col-lg-3'/>
          <div className='border col-lg-6'> 
            <div>
              <div id="center-box" className="p-0 text-center m-0">
              <p className="text-break mt-3">
                {quote}
              </p>
              </div>
              
              <div id="author">
                {"-" + author}
              </div>
            </div>
            <div className='row mt-5 mb-3'> 
              <div className='col-sm'/>
              <div className='col-sm'>
                <button 
                  id="new-quote"
                  className='btn btn-primary' 
                  onClick={updateRandomIndex}
                >
                  New Quote
                </button>
              </div>
              <div className='col-sm'>
                <a href={getTwitterURL()} id="tweet-quote"><i className='fab fa-twitter'></i> Tweet quote</a>
              </div>
              <div className='col-sm'/>
            </div>
          </div>
          <div className='col-lg-3'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
