import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Details = dynamic(() => import('../features/Details'), {
  ssr: false,
});

const DetailsPage: NextPage = () => <Details />;

export default DetailsPage;
