import clsx from 'clsx';
import { ShipType } from './Ship';

type Props = {
    currentShip: ShipType | null;
    setShip: (ship: ShipType) => void;
};

const FleetUI = ({ currentShip, setShip }: Props) => {
    const buttonClassList = clsx(
        'rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700',
    );

    return (
        <div className="flex flex-col items-center justify-center rounded-lg bg-dark-200 p-4">
            <p className="pb-4 text-xl font-semibold">{currentShip?.name}</p>
            <div className="flex gap-2">
                <button
                    onClick={() => setShip({ name: 'carrier', length: 5, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Aircraft Carrier (5)
                </button>
                <button
                    onClick={() => setShip({ name: 'amphibious', length: 4, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Amphibious(4)
                </button>
                <button
                    onClick={() => setShip({ name: 'nuclear_submarine', length: 3, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Nuclear Submarine (3)
                </button>
                <button
                    onClick={() => setShip({ name: 'destroyer', length: 3, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Destroyer (3)
                </button>
                <button
                    onClick={() => setShip({ name: 'submarine', length: 2, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Submarine (2)
                </button>
                <button
                    onClick={() => setShip({ name: 'corvette', length: 2, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Corvette (2)
                </button>
                <button
                    onClick={() => setShip({ name: 'patrol', length: 1, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Patrol Boat (1)
                </button>
                <button
                    onClick={() => setShip({ name: 'coast_guard', length: 1, section: null })}
                    className={buttonClassList}
                    type="button"
                >
                    Coast Guard (1)
                </button>
            </div>
        </div>
    );
};
export default FleetUI;
