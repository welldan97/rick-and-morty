import { memo } from 'react';
import Character from '../types/Character';

interface Props {
  character: Character;
}

const Cards = memo(({ character }: Props) => (
  <div className="card w-64 bg-base-100 shadow-md mx-4 mb-8">
    <figure>
      <img src={character.image} alt={character.name} className="w-100" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{character.name}</h2>
      <dl>
        <dt className="font-bold float-left">Specie:</dt>
        <dd className="float-left">&nbsp;{character.species}</dd>
        <dt className="font-bold clear-both float-left">Gender:</dt>
        <dd className="float-left">&nbsp;{character.gender}</dd>
      </dl>
      <div className="card-actions justify-center">
        <button className="btn btn-primary" type="button">
          Details
        </button>
      </div>
    </div>
  </div>
));

export default Cards;
