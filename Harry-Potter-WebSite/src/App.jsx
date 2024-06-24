import { useState, useEffect } from 'react';
import './App.css';
import MouseFollower from './MouseFollower'
import Card from './Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './Character';

const MAGICAPI = 'https://hp-api.onrender.com/api/characters';

function App() {
  const [characters, setCharacters] = useState([]);
 

  const getCharacters = async () => {
    const response = await fetch(MAGICAPI);
    const data = await response.json();
    setCharacters(data);
  };

  // Llama a getCharacters cuando el componente se monta
  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <>
    <BrowserRouter>
        <MouseFollower/>
        <Routes>
           <Route path="/" element={<Card characters={characters} />} />
          <Route path="/character/:id" element={<Character  characters={characters}/>} />
        </Routes>
       {/* <Card characters={characters} /> */}
       </BrowserRouter>
    </>
  );
}

export default App;
