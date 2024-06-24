import { useParams } from "react-router-dom";

export default function Character({ characters }) {
  const { id } = useParams();
  const character = characters[id];

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>House: {character.house}</p>
      <p>Alternate Names: {character.alternate_names.join(', ')}</p>
      <p>Ancestry: {character.ancestry}</p>
    </div>
  );
}
