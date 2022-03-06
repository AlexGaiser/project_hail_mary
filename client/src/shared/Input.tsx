import react from 'React';

interface IProps {
  value: string;
  label: string;
  onChange: () => void;
}

export const Input = (props: IProps) => {
  const { label, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} value={value} />
    </div>
  );
};
