import react from 'React';

interface IProps {
  value: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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
