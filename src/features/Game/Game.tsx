import { useState } from 'react';
import FleetUI from './FleetUI';
import Gameboard from './Gameboard';
import { ShipType } from './Ship';

type GameStatus = 'setup' | 'active' | 'over';
type Player = 'player1' | 'player2';
type Ship =
    | 'carrier'
    | 'amphibious'
    | 'nuclear_submarine'
    | 'destroyer'
    | 'submarine'
    | 'corvette'
    | 'patrol'
    | 'coast_guard';

type PlayerShips = {
    [player in Player]: {
        [ship in Ship]?: boolean;
    };
};

const Game = () => {
    const [gameStatus, setGameStatus] = useState<GameStatus>('setup');
    const [player, setPlayer] = useState<Player>('player1');
    const [playerShips, setPlayerShips] = useState<PlayerShips>({ player1: {}, player2: {} });
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

    const updatePlayerShips = (ship: Ship, playerId: Player) => {
        if (playerId === 'player1') {
            setPlayerShips((prevPlayerShips) => ({
                ...prevPlayerShips,
                player1: {
                    ...prevPlayerShips.player1,
                    [ship]: true,
                },
            }));
        }
        if (playerId === 'player2') {
            setPlayerShips((prevPlayerShips) => ({
                ...prevPlayerShips,
                player2: {
                    ...prevPlayerShips.player2,
                    [ship]: true,
                },
            }));
        }
    };
    return (
        <div className="mx-12 mt-16 flex flex-col items-center justify-center gap-2">
            <div className="">
                <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-2xl font-bold">Player 1</p>
                        <Gameboard
                            gameStatus={gameStatus}
                            currentShip={currentShip}
                            player="player1"
                            currentPlayer={player}
                            setPlayerShips={updatePlayerShips}
                            finishTurn={setPlayerTurn}
                        />
                        <FleetUI
                            currentShip={currentShip}
                            setShip={setShip}
                            placedShips={playerShips.player1}
                        />
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center text-2xl font-bold">Player 2</p>
                            <Gameboard
                                gameStatus={gameStatus}
                                currentShip={currentShip}
                                player="player2"
                                currentPlayer={player}
                                setPlayerShips={updatePlayerShips}
                                finishTurn={setPlayerTurn}
                            />
                            <FleetUI
                                currentShip={currentShip}
                                setShip={setShip}
                                placedShips={playerShips.player2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Game;
