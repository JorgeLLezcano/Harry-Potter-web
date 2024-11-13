import { useParams, Link, useNavigate  } from "react-router-dom";
import './hojaDeEstilo/character.css'
import Chargerts from "./Chargerts";
import './index.css'

export default function Character({ characters }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const character = characters[id];

  if (!character) {
    return <Chargerts/>
    // return <div>Character not found</div>;
  }
  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate('/'));
    } else {
      navigate('/');
    }
  };

  return (
<conteiner>
    <main style={{ backgroundImage: `url(${character.image} )` ,
    }}>
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

            > {character.house}</p>
      </div>
    {/* <button className="btn-back">
        <Link to={'/'}> Back </Link>
     </button> */}
      <button className="btn-back" onClick={handleBack}>Back</button>
    <header>
     <h1>{character.name}</h1>
     </header>
     
    <div className="tarjeta-character">
     
     
 


            <div  className="character-name">
                <img src={character.image} alt={character.name} />
            </div>
            </div>

                <div className="meta-data">
                    <p>Alternate Names: {character.alternate_names.join(', ')}</p>
                    <p>Ancestry: {character.ancestry}</p>
                    <p>date Of Birth: {character.dateOfBirth}</p>
                    <p>Eye Colour: {character.eyeColour}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Hair Colour: {character.hairColour}</p>
                    <p>wizard: {character.wizard}</p>
                
                </div>
     
    </main>
    </conteiner>
  );
}
