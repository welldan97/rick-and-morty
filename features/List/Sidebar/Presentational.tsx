import { memo } from 'react';

import Input from '../../lib/Input';
import Select from '../../lib/Select';

interface Props {
  name: string;
  onChangeName: (value: string) => void;
  status?: string;
  onChangeStatus: (value: string) => void;
  gender?: string;
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
    <aside className="bg-base-200 w-full sm:w-64 shrink-0 shadow-lg z-10 fixed left-0 top-0 h-full px-8 pt-20">
      <Input
        label="Name"
        value={name}
        onChange={onChangeName}
        placeholder="Rick Sanchez"
        id="input-name"
      />
      <Select
        label="Status"
        value={status}
        onChange={onChangeStatus}
        id="input-status"
        options={[
          { value: undefined, label: 'All' },
          { value: 'Alive', label: 'Alive' },
          { value: 'Dead', label: 'Dead' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
      <Select
        label="Gender"
        value={gender}
        onChange={onChangeGender}
        id="input-gender"
        options={[
          { value: undefined, label: 'All' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
    </aside>
  ),
);

export default Sidebar;
