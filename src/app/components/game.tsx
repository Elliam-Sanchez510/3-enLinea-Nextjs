'use client'
import React, { useState, useEffect } from 'react';
import Status from './status';
import Board from './board';

const Game: React.FC = () => {
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [player1, setPlayer1] = useState<string>('');
    const [winner, setWinner] = useState<string | null>(null);
    const player2 = 'Player 2';

    useEffect(() => {
        if (!isXNext && gameStarted && !calculateWinner(squares)) {
            const emptySquares = squares.reduce((acc, val, index) => (val === null ? [...acc, index] : acc), [] as number[]);
            const randomIndex = Math.floor(Math.random() * emptySquares.length);
            const newSquares = squares.slice();
            newSquares[emptySquares[randomIndex]] = 'O';
            setSquares(newSquares);
            setIsXNext(true);
        }
    }, [isXNext, squares, gameStarted]);

    const handleClick = (index: number) => {
        if (!gameStarted || squares[index] || calculateWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);

        const winner = calculateWinner(newSquares);
        if (winner) {
            setWinner(winner);
        } else {
            setIsXNext(!isXNext);
        }
    };

    const handleStartGame = () => {
        const playerName = prompt('Enter your name:') || 'Player 1';
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setGameStarted(true);
        setPlayer1(playerName);
        setWinner(null);
    };

    const handleRestartGame = () => {
        setSquares(Array(9).fill(null));
        setGameStarted(true);
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div className="text-center my-8">
            <Status winner={winner} isXNext={isXNext} player1={player1} player2={player2} gameStarted={gameStarted} />
            <Board squares={squares} onClick={handleClick} />
            <div className="flex justify-center space-x-4">
                <button
                    className="btn-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    onClick={handleStartGame}
                    disabled={gameStarted || !!winner}
                >
                    Start Game
                </button>
                <button
                    className="btn-restart bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                    onClick={handleRestartGame}
                    disabled={!gameStarted || !!winner}
                >
                    Restart Game
                </button>
            </div>
        </div>
    );
};

const calculateWinner = (squares: Array<string | null>): string | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default Game;