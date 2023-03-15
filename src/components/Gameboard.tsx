import { useState } from 'react';
import { ShipType } from './Ship';
import Tile, { TileObject } from './Tile';

type PlacedShips =
    | 'carrier'
    | 'amphibious'
    | 'nuclear_submarine'
    | 'destroyer'
    | 'submarine'
    | 'corvette'
    | 'patrol'
    | 'coast_guard';
type GameStatus = 'setup' | 'active' | 'over';
type Props = {
    gameStatus: GameStatus;
    currentShip: ShipType | null;
    player: 'player1' | 'player2';
    currentPlayer: 'player1' | 'player2';
    finishTurn: () => void;
};

const Gameboard = ({ gameStatus, currentShip, player, currentPlayer, finishTurn }: Props) => {
    const [placedShips, setPlacedShips] = useState<Array<PlacedShips>>([]);
    const [gameboard, setGameboard] = useState(
        [...Array(10).keys()].map((rindex) => ({
            rindex,
            columns: [...Array(10).keys()].map(
                (cindex): TileObject => ({
                    cindex,
                    ship: null,
                    hit: null,
                }),
            ),
        })),
    );

    const updateShipsGameboard = (ship: ShipType, row: number, column: number, section: number) => {
        setGameboard((prevGameboard) => {
            const updatedRows = prevGameboard.map((currRow) => {
                if (currRow.rindex === row) {
                    const updatedColumns = currRow.columns.map((currColumn) => {
                        if (currColumn.cindex === column) {
                            return {
                                ...currColumn,
                                ship: { ...ship, section },
                            };
                        }
                        return currColumn;
                    });
                    return {
                        ...currRow,
                        columns: updatedColumns,
                    };
                }
                return currRow;
            });
            return updatedRows;
        });
    };

    const checkAllPlacedShips = (ships: Array<PlacedShips>): boolean => {
        const uniqueShips = [...new Set(ships)];
        const totalShips = 8;

        if (uniqueShips.length === totalShips) {
            return true;
        }

        return false;
    };

    const placeShip = (ship: ShipType, row: number, column: TileObject) => {
        if (currentPlayer === player && !checkAllPlacedShips(placedShips)) {
            for (let i = 0; i < ship.length; i += 1) {
                updateShipsGameboard(ship, row, column.cindex + i, i);
            }
            setPlacedShips((prevShips) => [...prevShips, ship.name]);
        } else {
            finishTurn();
        }
    };

    const receiveAttack = (row: number, column: TileObject) => {
        if (currentPlayer === player) {
            setGameboard((prevGameboard) => {
                const updatedRows = prevGameboard.map((currRow) => {
                    if (currRow.rindex === row) {
                        const updatedColumns = currRow.columns.map((currColumn) => {
                            if (currColumn.cindex === column.cindex) {
                                return {
                                    ...currColumn,
                                    hit: !!currColumn.ship,
                                };
                            }
                            return currColumn;
                        });
                        return {
                            ...currRow,
                            columns: updatedColumns,
                        };
                    }
                    return currRow;
                });
                return updatedRows;
            });

            finishTurn();
        }
    };

    return (
        <div className="rounded-lg bg-dark-700 p-2">
            <div className="grid grid-rows-[repeat(10,80px)] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-dark-900 ">
                {gameboard.map((row) => (
                    <div
                        key={`r-${row.rindex}`}
                        data-row={row.rindex}
                        className="grid grid-cols-[repeat(10,80px)]"
                    >
                        {row.columns.map((column) => (
                            <Tile
                                key={`r-${row.rindex}-c-${column.cindex}`}
                                row={row.rindex}
                                column={column}
                                gameStatus={gameStatus}
                                ship={currentShip}
                                receiveAttack={receiveAttack}
                                placeShip={placeShip}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Gameboard;