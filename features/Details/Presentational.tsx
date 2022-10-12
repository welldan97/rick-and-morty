import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { memo } from 'react';
import Navbar from '../lib/Navbar';
import Data from './Data';
import Episodes from './Episodes';
import DataWrapper from './DataWrapper';

interface Props {
  onBack: () => void;
}

const Details = memo(({ onBack }: Props) => (
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
    <DataWrapper>
      {character => (
        <article className="-mt-32 lg:-mt-24 bg-base-100 lg:w-[976px] p-8 mx-auto lg:rounded-xl shadow-lg">
          <Data character={character} />
          <Episodes episodes={character.episodes} />
        </article>
      )}
    </DataWrapper>
  </>
));

export default Details;
