import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const List = dynamic(() => import('../features/List'), {
  ssr: false,
});

const ListPage: NextPage = () => <List />;

export default ListPage;
