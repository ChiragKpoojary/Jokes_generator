import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Card = () => {
  const [jokes, setJokes] = useState({});
const[show,SetShow]=useState(false);
       const fetchNewJoke = () => {
        
            Axios.get("https://v2.jokeapi.dev/joke/programming").then((res) => {
              console.log(res);  
              setJokes(res.data);
              SetShow(false);
            })
            setTimeout(()=>{
                 SetShow(true);
              },4000)
        
          
       };
       useEffect(()=>{
      fetchNewJoke();
       },[]);

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='bg-yellow-600 text-white rounded-xl p-5 shadow-lg'>
        <p className='text-center text-lg font-bold'>{jokes.setup || jokes.joke}</p>
        {show &&  <p className='mt-2'>{jokes.delivery }</p>}
        <button 
          className='bg-yellow-300 text-black rounded-md px-4 py-2 mt-4 shadow-md hover:bg-yellow-200 focus:outline-none '
          onClick={fetchNewJoke}
        >
          Click for Another Joke
        </button>
      </div>
    </div>
  );
};

export default Card;
