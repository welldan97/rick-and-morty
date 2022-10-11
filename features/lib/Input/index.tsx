import { memo } from 'react';

interface Props {
  value: string;
  label: string;
  placeholder: string;
  id: string;
  onChange: (value: string) => void;
}

const Input = memo(({ value, label, placeholder, id, onChange }: Props) => (
  <div className="form-control w-full">
    <label className="label" htmlFor={id}>
      <span className="label-text">{label}</span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered"
      id={id}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
));

export default Input;
