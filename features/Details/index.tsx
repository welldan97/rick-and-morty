import { memo } from 'react';
import { useGetCharacterQuery } from '../api/apiSlice';
import DlItem from '../lib/DlItem';
import Navbar from '../lib/Navbar';
import useRouterState from '../lib/useRouterState';
import Character from '../types/Character';
import Episodes from './Episodes';

interface Props {
  character: Character;
}

const Details = memo(({ character }: Props) => (
  <>
    <Navbar />
    <article>
      <img src={character.image} alt={character.name} />
      <h2 className="text-2xl font-bold">{character.name}</h2>

      <dl>
        <DlItem term="Status" definition={character.status} />
        <DlItem term="Specie" definition={character.species} />
        <DlItem term="Type" definition={character.type} />
        <DlItem term="Gender" definition={character.gender} />
        <DlItem term="Origin" definition={character.origin.name} />
        <DlItem
          term="Created at"
          definition={new Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
          }).format(new Date(character.created))}
        />
      </dl>

      <Episodes episodes={character.episode} />
    </article>
  </>
));

export default memo(() => {
  const { value: rawId, isReady } = useRouterState('id');
  const id = Number(rawId);
  const skip = !isReady || Number.isNaN(id);
  const { data, isSuccess } = useGetCharacterQuery(id, { skip });
  if (!isSuccess) return null;
  return <Details character={data} />;
});
