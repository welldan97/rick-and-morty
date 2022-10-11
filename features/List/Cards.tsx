import { memo } from 'react';
import Character from '../types/Character';
import Card from './Card';

interface Props {
  characters: Character[];
}

const Cards = memo(({ characters }: Props) => (
  <main className="px-2 pt-4 lg:pt-6 flex flex-wrap justify-evenly">
    {characters.map(c => (
      <Card key={c.id} character={c} />
    ))}
  </main>
));

export default Cards;
