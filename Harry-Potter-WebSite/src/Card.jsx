
import { Link } from "react-router-dom";


export default function Card({characters}){
    return(
        <div className='conteiner'>
           {/* <Link to={'/notFound'}>not found</Link> */}

        {characters.map((character, index) => {
            return (
                <Link to={`/character/${index}`} key={character.id}>
              <div key={character.id} className='card'>
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
          </Link>
     
            );
          })}
          </div>
    )
}