// import { useParams, Link, useNavigate  } from "react-router-dom";
// import './hojaDeEstilo/character.css'
// import Chargerts from "./Chargerts";
// import './index.css'

// export default function Character({ characters }) {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const character = characters[id];

//   if (!character) {
//     return <Chargerts/>
//     // return <div>Character not found</div>;
//   }
//   const handleBack = () => {
//     if (document.startViewTransition) {
//       document.startViewTransition(() => navigate('/'));
//     } else {
//       navigate('/');
//     }
//   };

//   return (
// <conteiner>
//     <main style={{ backgroundImage: `url(${character.image} )` ,
//     }}>
//            <div className="bandera"
//             style={
//               {   
//                 backgroundColor: character.house === 'Gryffindor' ?
//                 'red' : character.house === 'Hufflepuff' ?
//                 'yellow' : character.house === 'Ravenclaw' ?
//                   'blue' : 'green'
//                 }
//                 }>
//             <p
//             style={
//               {   
//                 backgroundColor: character.house === 'Gryffindor' ?
//                 'yellow' : character.house === 'Hufflepuff' ?
//                 'black' : character.house === 'Ravenclaw' ?
//                   'brown' : 'grey',

//                   color: character.house==='Hufflepuff'? "white":"black"
//                 }
//                 }

//             > {character.house}</p>
//       </div>
//     {/* <button className="btn-back">
//         <Link to={'/'}> Back </Link>
//      </button> */}
//       <button className="btn-back" onClick={handleBack}>Back</button>
//     <header>
//      <h1>{character.name}</h1>
//      </header>
     
//     <div className="tarjeta-character">
     
     
 


//             <div  className="character-name">
//                 <img src={character.image} alt={character.name} />
//             </div>
//             </div>

//                 <div className="meta-data">
//                     <p>Alternate Names: {character.alternate_names.join(', ')}</p>
//                     <p>Ancestry: {character.ancestry}</p>
//                     <p>date Of Birth: {character.dateOfBirth}</p>
//                     <p>Eye Colour: {character.eyeColour}</p>
//                     <p>Gender: {character.gender}</p>
//                     <p>Hair Colour: {character.hairColour}</p>
//                     <p>wizard: {character.wizard}</p>
                
//                 </div>
     
//     </main>
//     </conteiner>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import './hojaDeEstilo/character.css';
import Chargerts from "./Chargerts";
import './index.css';

export default function Character({ characters }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const character = characters[id];
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    const tilt = tiltRef.current;
    if (!tilt) return;

    const height = tilt.clientHeight;
    const width = tilt.clientWidth;
    const x = e.nativeEvent.layerX;
    const y = e.nativeEvent.layerY;
    const multiplier = 50;

    const xRotate = multiplier * ((x - width / 2) / width);
    const yRotate = -multiplier * ((y - height / 2) / height);

    tilt.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
  };

  const handleMouseOut = () => {
    const tilt = tiltRef.current;
    if (!tilt) return;
    tilt.style.transform = 'perspective(500px) scale(1.1) rotateX(0deg) rotateY(0deg)';
  };

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate('/'));
    } else {
      navigate('/');
    }
  };

  if (!character) {
    return <Chargerts />;
  }

  return (
    <div className="container">
      <main style={{ backgroundImage: `url(${character.image})` }}>
        <div 
          className="bandera"
          style={{
            backgroundColor: character.house === 'Gryffindor' 
              ? 'red' 
              : character.house === 'Hufflepuff' 
              ? 'yellow' 
              : character.house === 'Ravenclaw' 
              ? 'blue' 
              : 'green'
          }}
        >
          <p
            style={{
              backgroundColor: character.house === 'Gryffindor'
                ? 'yellow'
                : character.house === 'Hufflepuff'
                ? 'black'
                : character.house === 'Ravenclaw'
                ? 'brown'
                : 'grey',
              color: character.house === 'Hufflepuff' ? "white" : "black"
            }}
          >
            {character.house}
          </p>
        </div>

        <button className="btn-back" onClick={handleBack}>Back</button>

        <header>
          <h1>{character.name}</h1>
        </header>

        <div className="tarjeta-character">
          <div 
            className="character-name tilt"
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
          >
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
    </div>
  );
}