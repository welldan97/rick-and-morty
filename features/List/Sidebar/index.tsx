import { memo } from 'react';
import useFilters from '../useFilters';
import Sidebar from './Presentational';

export default memo(() => {
  const {
    //
    name,
    setName,
    status,
    setStatus,
    gender,
    setGender,
  } = useFilters();

  return (
    <Sidebar
      name={name}
      onChangeName={setName}
      status={status}
      onChangeStatus={setStatus}
      gender={gender}
      onChangeGender={setGender}
    />
  );
});
