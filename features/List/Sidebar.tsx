import { memo, useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRouterState from '../lib/useRouterState';

interface Props {
  name: string;
  status?: string;
  gender?: string;
  onChangeName: (value: string) => void;
  onChangeStatus: (value: string) => void;
  onChangeGender: (value: string) => void;
}
const Sidebar = memo(
  ({
    name,
    onChangeName,
    status,
    onChangeStatus,
    gender,
    onChangeGender,
  }: Props) => (
    <aside className="bg-base-100 w-64 shrink-0 shadow-lg z-10">
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="input-name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Rick Sanchez"
          className="input input-bordered"
          id="input-name"
          value={name}
          onChange={e => onChangeName(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="input-status">
          <span className="label-text">Status</span>
        </label>
        <select
          className="select select-bordered"
          id="input-status"
          onChange={e => onChangeStatus(e.target.value)}
          value={status}
        >
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label" htmlFor="input-gender">
          <span className="label-text">Gender</span>
        </label>
        <select
          className="select select-bordered"
          id="input-gender"
          onChange={e => onChangeGender(e.target.value)}
          value={gender}
        >
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </aside>
  ),
);

export default memo(() => {
  const [inputName, setInputName] = useState('');
  const [valueChanged, setValueChanged] = useState(false);
  const { value: name, setValue: setName, isReady } = useRouterState('name');
  const { value: status, setValue: setStatus } = useRouterState('status');
  const { value: gender, setValue: setGender } = useRouterState('gender');
  useEffect(() => {
    if (!isReady) return;
    setInputName(name);
  }, [name, isReady]);

  const [debouncedName] = useDebounce(inputName, 300);

  useEffect(() => {
    if (!valueChanged) return;
    if (debouncedName === name) return;
    setName(prevQuery => ({ ...prevQuery, name: debouncedName, page: '1' }));
  }, [debouncedName]);

  const handleChangeName = useCallback((value: string) => {
    setValueChanged(true);
    setInputName(value);
  }, []);

  const handleChangeStatus = useCallback((value: string) => {
    setStatus(prevQuery => ({ ...prevQuery, status: value, page: '1' }));
  }, []);

  const handleChangeGender = useCallback((value: string) => {
    setStatus(prevQuery => ({ ...prevQuery, gender: value, page: '1' }));
  }, []);

  return (
    <Sidebar
      name={inputName}
      onChangeName={handleChangeName}
      status={status}
      onChangeStatus={handleChangeStatus}
      gender={gender}
      onChangeGender={handleChangeGender}
    />
  );
});
