import { useState, useEffect } from 'react';
import './App.css';
import MouseFollower from './MouseFollower'

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
      <header>
          
          <MouseFollower/>
        </header>
       
      <div className='conteiner'>
     
    
        {characters.map((character) => {
          return (
            <div key={character.id} className='card'>
              <h1>{character.name}</h1>
              {character.image && <img src={character.image} alt={character.name} />}
              <div className='character-data'>
              <p
              style={
{backgroundColor: character.house === 'Gryffindor' ? 'red' : character.house === 'Hufflepuff' ? 'yellow' : character.house === 'Ravenclaw' ? 'blue' : 'green'}
              }>{character.house}</p>
             <p>{character.alternate_names[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
