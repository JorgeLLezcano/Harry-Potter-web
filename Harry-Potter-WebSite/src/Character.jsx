import { useParams, Link } from "react-router-dom";
import './hojaDeEstilo/character.css'

export default function Character({ characters }) {
  const { id } = useParams();
  const character = characters[id];

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <>
    <header>
     <h1>{character.name}</h1>
     </header>
    <div className="tarjeta-character">
     
      <div  className="character-name">
      
      <img src={character.image} alt={character.name} />
      </div>
      <div className="bandera"
      style={
        {   
          backgroundColor: character.house === 'Gryffindor' ?
          'red' : character.house === 'Hufflepuff' ?
          'yellow' : character.house === 'Ravenclaw' ?
            'blue' : 'green'
          }
          }>
      <p
      style={
        {   
          backgroundColor: character.house === 'Gryffindor' ?
          'yellow' : character.house === 'Hufflepuff' ?
          'black' : character.house === 'Ravenclaw' ?
            'brown' : 'grey',

            color: character.house==='Hufflepuff'? "white":"black"
          }
          }
      >House: {character.house}</p>

      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2h60uXMBgK-JDhmig-BrEteswtC0rMl1nlg&s'/>
      </div>
      <div className="meta-data">
      <p>Alternate Names: {character.alternate_names.join(', ')}</p>
      <p>Ancestry: {character.ancestry}</p>
      </div>
     <Link to={'/'}> Back </Link>
    </div>
    </>
  );
}
