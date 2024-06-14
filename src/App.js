import React from 'react';
import "./index.css";
import Header from './components/Header';  
import Card from './components/Card';  
const App = () => {
  return (
    <div className='h-screen bg-cover bg-center' style={{ backgroundImage:`url('world-smile-day-emojis-arrangement.jpg')`}}>
<Header/>
<Card/>
    </div>
  )
}

export default App ;