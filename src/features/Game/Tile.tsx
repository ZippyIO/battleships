import clsx from 'clsx';
import Ship, { ShipType } from './Ship';

export type TileObject = {
    cindex: number;
    ship: ShipType | null;
    hit: null | boolean;
};

type Props = {
    row: number;
    column: TileObject;
    gameStatus: 'setup' | 'active' | 'over';
    ship: ShipType | null;
    receiveAttack: (row: number, column: TileObject) => void;
    placeShip: (ship: ShipType, row: number, column: TileObject) => void;
};

const Tile = ({ row, column, gameStatus, ship, receiveAttack, placeShip }: Props) => {
    const clickTile = () => {
        if (gameStatus === 'setup') placeShip(ship as ShipType, row, column);
        if (gameStatus === 'active') receiveAttack(row, column);
    };

    return (
        <div className="h-[80px] w-[80px] overflow-hidden border-[1px] border-blue-800/10 bg-slate-900/30">
            <button
                onClick={clickTile}
                className={clsx(
                    'h-full w-full',
                    {
                        'bg-green-500': column.hit === true,
                    },
                    {
                        'bg-orange-500': column.hit === false,
                    },
                    {
                        'transition-colors duration-150  active:bg-red-500 active:duration-75':
                            !column.hit,
                    },
                )}
                data-row={row}
                data-column={column.cindex}
                type="button"
                aria-label={`Tile row ${row} column ${column.cindex}`}
            >
                {column.ship && <Ship ship={column.ship} />}
            </button>
        </div>
    );
};

export default Tile;
