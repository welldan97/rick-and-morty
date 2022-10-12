import { memo } from 'react';

interface Props {
  value?: string;
  label: string;
  id: string;
  onChange: (value: string) => void;
  options: { value?: string; label: string }[];
}

const Input = memo(({ value, label, id, options, onChange }: Props) => (
  <div className="form-control w-full">
    <label className="label" htmlFor={id}>
      <span className="label-text">{label}</span>
    </label>
    <select
      className="select select-bordered"
      id={id}
      onChange={e => onChange(e.target.value)}
      value={String(value)}
    >
      {options.map(({ value: v, label: l }) => (
        <option key={l} value={v}>
          {l}
        </option>
      ))}
    </select>
  </div>
));

export default Input;
