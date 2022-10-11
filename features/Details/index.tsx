import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';
import { useGetCharacterQuery } from '../api/apiSlice';
import DlItem from '../lib/DlItem';
import Navbar from '../lib/Navbar';
import useRouterState from '../lib/useRouterState';
import Character from '../types/Character';
import Episodes from './Episodes';

interface Props {
  character: Character;
  onBack: () => void;
}

const Details = memo(({ character, onBack }: Props) => (
  <>
    <Navbar>
      {() => (
        <a
          className="btn btn-ghost rounded-btn"
          type="button"
          onClick={e => {
            e.preventDefault();
            onBack();
          }}
          href="/"
        >
          <MdArrowBack className="w-6 h-6" />
        </a>
      )}
    </Navbar>
    <article className="-mt-32 lg:-mt-24 bg-base-100 lg:w-[976px] p-8 mx-auto lg:rounded-xl shadow-lg">
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
            <DlItem term="Origin" definition={character.origin.name} />
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

      <Episodes episodes={character.episode} />
    </article>
  </>
));

export default memo(() => {
  const router = useRouter();
  const { value: rawId, isReady } = useRouterState('id');
  const id = Number(rawId);
  const skip = !isReady || Number.isNaN(id);
  const { data, isSuccess } = useGetCharacterQuery(id, { skip });

  const handleBack = useCallback(() => {
    router.back();
    router.push('/', undefined);
  }, []);

  if (!isSuccess) return null;
  return <Details character={data} onBack={handleBack} />;
});
