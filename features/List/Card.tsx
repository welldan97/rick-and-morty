import { memo } from 'react';
import AnchorButton from '../lib/AnchorButton';
import DlItem from '../lib/DlItem';
import Character from '../types/Character';

interface Props {
  character: Character;
}

const Card = memo(({ character }: Props) => (
  <div className="card w-64 bg-base-100 shadow-md mx-4 mb-8">
    <figure>
      <img src={character.image} alt={character.name} className="w-100" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{character.name}</h2>
      <dl>
        <DlItem term="Specie" definition={character.species} />
        <DlItem term="Gender" definition={character.gender} />
      </dl>
      <div className="card-actions justify-center">
        <AnchorButton href={`/details?id=${character.id}`}>
          Details
        </AnchorButton>
      </div>
    </div>
  </div>
));

export default Card;
