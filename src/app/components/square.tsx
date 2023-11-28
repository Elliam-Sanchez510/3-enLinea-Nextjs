import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, disabled }) => (
  <button className=" bg-white w-20 h-20 border-gray-300  text-3xl font-bold" onClick={onClick} disabled={disabled}>
    {value}
  </button>
);

export default Square;
