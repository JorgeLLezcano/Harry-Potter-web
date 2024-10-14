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

      <img src={character.house==='Gryffindor'? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2h60uXMBgK-JDhmig-BrEteswtC0rMl1nlg&s':
      character.house === 'Hufflepuff'?'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallhere.com%2Fes%2Fwallpaper%2F2161209&psig=AOvVaw1Q831Enqs37QwuOcF0kkCV&ust=1728770830106000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCesq2rh4kDFQAAAAAdAAAAABAE':''}/>
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
