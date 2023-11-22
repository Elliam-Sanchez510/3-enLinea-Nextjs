import React from 'react';

type StatusProps = {
  winner: string | null;
  isXNext: boolean;
  player1: string;
  player2: string;
  gameStarted: boolean;
};

const Status: React.FC<StatusProps> = ({ winner, isXNext, player1, player2, gameStarted }) => {
  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? player1 : player2}`;
  } else {
    status = gameStarted ? `Next player: ${isXNext ? player1 : player2}` : 'Game not started';
  }

  return <div className="mb-4 font-bold text-xl status">{status}</div>;
};

export default Status;
