import { memo } from 'react';
import DlItem from '../lib/DlItem';
import Character from '../types/Character';

interface Props {
  character: Character;
}

const Data = memo(({ character }: Props) => (
  <div className="flex gap-8 mb-8 flex-wrap">
    <img
      src={character.image}
      alt={character.name}
      className="rounded-xl shadow-md w-72 h-auto aspect-square  max-w-full bg-base-300"
    />
    <div>
      <h2 className="text-4xl font-bold mb-8">{character.name}</h2>
      <dl>
        <DlItem term="Status" definition={character.status} />
        <DlItem term="Specie" definition={character.species} />
        <DlItem term="Type" definition={character.type} />
        <DlItem term="Gender" definition={character.gender} />
        <DlItem term="Origin" definition={character.origin} />
        <DlItem
          term="Created at"
          definition={new Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
          }).format(new Date(character.created))}
        />
      </dl>
    </div>
  </div>
));

export default Data;
