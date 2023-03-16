import clsx from 'clsx';
import { ShipType } from './Ship';

type Ship =
    | 'carrier'
    | 'amphibious'
    | 'nuclear_submarine'
    | 'destroyer'
    | 'submarine'
    | 'corvette'
    | 'patrol'
    | 'coast_guard';

type Props = {
    currentShip: ShipType | null;
    placedShips: { [ship in Ship]?: boolean };
    setShip: (ship: ShipType) => void;
};

const FleetUI = ({ currentShip, placedShips, setShip }: Props) => {
    const buttonClassList = clsx(
        'rounded-md bg-blue-500 text-sm font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700',
        'disabled:opacity-50 disabled:pointer-events-none',
    );

    return (
        <div className="flex flex-col items-center justify-center rounded-md bg-dark-700 p-4">
            <p className="pb-4 text-xl font-semibold">{currentShip?.name}</p>
            <div className="flex gap-2">
                <button
                    onClick={() => setShip({ name: 'carrier', length: 5, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.carrier}
                >
                    Aircraft Carrier (5)
                </button>
                <button
                    onClick={() => setShip({ name: 'amphibious', length: 4, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.amphibious}
                >
                    Amphibious(4)
                </button>
                <button
                    onClick={() => setShip({ name: 'nuclear_submarine', length: 3, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.nuclear_submarine}
                >
                    Nuclear Submarine (3)
                </button>
                <button
                    onClick={() => setShip({ name: 'destroyer', length: 3, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.destroyer}
                >
                    Destroyer (3)
                </button>
                <button
                    onClick={() => setShip({ name: 'submarine', length: 2, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.submarine}
                >
                    Submarine (2)
                </button>
                <button
                    onClick={() => setShip({ name: 'corvette', length: 2, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.corvette}
                >
                    Corvette (2)
                </button>
                <button
                    onClick={() => setShip({ name: 'patrol', length: 1, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.patrol}
                >
                    Patrol Boat (1)
                </button>
                <button
                    onClick={() => setShip({ name: 'coast_guard', length: 1, section: null })}
                    className={buttonClassList}
                    type="button"
                    disabled={placedShips.coast_guard}
                >
                    Coast Guard (1)
                </button>
            </div>
        </div>
    );
};
export default FleetUI;
