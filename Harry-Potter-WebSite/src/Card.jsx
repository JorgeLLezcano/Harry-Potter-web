
import { Link,  useNavigate } from "react-router-dom";
import Chargerts from "./Chargerts";
// import './hojaDeEstilo/character.css'
import './index.css'


export default function Card({characters}){
  const navigate = useNavigate();


  if(characters.length === 0){
    return <Chargerts/>
  }


  const handleNavigation = (index) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(`/character/${index}`));
    } else {
      navigate(`/character/${index}`);
    }
  };

    return(
        <div className='conteiner'>
           {/* <button>
            <Link to={'/chargerts'}> Character </Link>
           </button> */}

        {characters.map((character, index) => {
            return (
                // <Link to={`/character/${index}`} key={character.id}>
              <div key={character.id}
               className='card'
               onClick={() => handleNavigation(index)}
               >
                <div className='front'>
                  <h1>{character.name}</h1>
                </div>
  
                <div className='back'>
                <h1>{character.name}</h1>
                  {character.image && <img src={character.image} alt={character.name} />}
                  <div className='character-data'>
                  <p
                  style={
                        {   
                          backgroundColor: character.house === 'Gryffindor' ?
                          'red' : character.house === 'Hufflepuff' ?
                          'yellow' : character.house === 'Ravenclaw' ?
                            'blue' : 'green'
                          }
                  }>{character.house}</p>
                <p>{character.alternate_names[0]}</p>
                </div>
                </div>
              </div>
          // </Link>
     
            );
          })}
          </div>
    )
}