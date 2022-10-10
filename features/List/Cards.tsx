import { memo } from 'react';
import Character from '../types/Character';
import Card from './Card';

interface Props {
  characters: Character[];
}

const Cards = memo(({ characters }: Props) => (
  <main className="p-8 flex flex-wrap">
    {characters.map(c => (
      <Card key={c.id} character={c} />
    ))}
  </main>
));

export default Cards;
