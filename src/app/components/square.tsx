import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
};

const Square: React.FC<SquareProps> = ({ value, onClick, disabled }) => (
  <button className="square bg-white border border-gray-300 p-4 text-3xl font-bold" onClick={onClick} disabled={disabled}>
    {value}
  </button>
);

export default Square;
