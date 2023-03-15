import { useState } from 'react';
import FleetUI from './FleetUI';
import Gameboard from './Gameboard';
import { ShipType } from './Ship';

type GameStatus = 'setup' | 'active' | 'over';
type Player = 'player1' | 'player2';

const Game = () => {
    const [gameStatus, setGameStatus] = useState<GameStatus>('setup');
    const [player, setPlayer] = useState<Player>('player1');
    const [currentShip, setCurrentShip] = useState<ShipType>({
        name: 'patrol',
        length: 1,
        section: null,
    });

    const setShip = (ship: ShipType) => {
        setCurrentShip(ship);
    };

    const setPlayerTurn = () => {
        if (player === 'player1') {
            setPlayer('player2');
        } else {
            setPlayer('player1');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="mt-2 flex flex-col items-center rounded-lg bg-dark-200 p-4">
                <p className="pb-4 text-2xl font-bold text-cyan-400">{gameStatus}</p>
                <div className="flex gap-1">
                    <button
                        onClick={() => setGameStatus('setup')}
                        type="button"
                        className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
                    >
                        Setup
                    </button>
                    <button
                        onClick={() => setGameStatus('active')}
                        type="button"
                        className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setGameStatus('over')}
                        type="button"
                        className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
                    >
                        Over
                    </button>
                </div>
                {player === 'player1' && <p>Player 1 turn</p>}
                {player === 'player2' && <p>Player 2 turn</p>}
            </div>
            <div className="flex gap-4">
                <div>
                    <p className="text-center text-2xl font-bold">Player 1</p>
                    <Gameboard
                        gameStatus={gameStatus}
                        currentShip={currentShip}
                        player="player1"
                        currentPlayer={player}
                        finishTurn={setPlayerTurn}
                    />
                </div>
                <div>
                    <p className="text-center text-2xl font-bold">Player 2</p>
                    <Gameboard
                        gameStatus={gameStatus}
                        currentShip={currentShip}
                        player="player2"
                        currentPlayer={player}
                        finishTurn={setPlayerTurn}
                    />
                </div>
            </div>
            <FleetUI currentShip={currentShip} setShip={setShip} />
        </div>
    );
};
export default Game;
