import react, { FC } from 'react';

interface IProps {
  value: string;
  onClick?: () => void;
  customClass?: string;
}

export const Button: react.FC<IProps> = (props: IProps) => {
  const { value, onClick, customClass } = props;

  return (
    <button
      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {' '}
      {value}
    </button>
  );
};
