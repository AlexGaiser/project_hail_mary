import React from 'react';

interface IProp {
  keys: JSX.Element[];
}

export const Keyboard = ({ keys }: IProp) => {
  return <div>{keys}</div>;
};
