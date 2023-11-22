import React from 'react';
import Square from './square';

type BoardProps = {
  squares: Array<string | null>;
  onClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => (
  <div className="mb-4 grid grid-cols-3 gap-4">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} disabled={!!square} />
    ))}
  </div>
);

export default Board;
