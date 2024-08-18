import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Card = () => {
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState('');

  const fetchNewJoke = async () => {
    try {
      const res = await Axios.get('https://jokes-backend-eawz.onrender.com');
      
      setJokes(res.data); 
      if (res.data.length > 0) {
        setCurrentJoke(res.data[0].joke);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getRandomJoke = () => {
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setCurrentJoke(jokes[randomIndex].joke);
    }
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='bg-yellow-600 text-white rounded-xl p-5 shadow-lg'>
        <p className='text-center text-lg font-bold'>{currentJoke}</p>
        <button
          className='bg-yellow-300 text-black rounded-md px-4 py-2 mt-4 shadow-md hover:bg-yellow-200 focus:outline-none'
          onClick={getRandomJoke} 
        >
          Click for Another Joke
        </button>
      </div>
    </div>
  );
};

export default Card;
