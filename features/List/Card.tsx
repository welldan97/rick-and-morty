import { memo } from 'react';
import Link from '../lib/Link';
import DlItem from '../lib/DlItem';
import Character from '../types/Character';

interface Props {
  character: Character;
}

const Card = memo(({ character }: Props) => (
  <div className="card w-64 bg-base-100 shadow-md mx-3 mb-6">
    <Link
      href="/details"
      query={() => ({ id: `${character.id}` })}
      tabIndex={-1}
    >
      <figure>
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 bg-base-200"
        />
      </figure>
    </Link>

    <div className="card-body p-6">
      <h2 className="card-title overflow-hidden whitespace-nowrap text-ellipsis inline">
        {character.name}
      </h2>
      <dl className="overflow-hidden whitespace-nowrap text-ellipsis">
        <DlItem term="Specie" definition={character.species} />
        <DlItem term="Gender" definition={character.gender} />
      </dl>
      <div className="card-actions justify-center pt-4">
        <Link
          href="/details"
          query={() => ({ id: `${character.id}` })}
          className="btn btn-primary w-full"
        >
          Details
        </Link>
      </div>
    </div>
  </div>
));

export default Card;
