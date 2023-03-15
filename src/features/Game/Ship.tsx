import SHIP_IMAGES from '../../data/shipImages';

export type ShipType =
    | { name: 'carrier'; length: 5; section: number | null }
    | { name: 'amphibious'; length: 4; section: number | null }
    | { name: 'nuclear_submarine'; length: 3; section: number | null }
    | { name: 'destroyer'; length: 3; section: number | null }
    | { name: 'submarine'; length: 2; section: number | null }
    | { name: 'corvette'; length: 2; section: number | null }
    | { name: 'patrol'; length: 1; section: number | null }
    | { name: 'coast_guard'; length: 1; section: number | null };

type Props = {
    ship: ShipType;
};

const Ship = ({ ship }: Props) => {
    if (ship) {
        return <img src={SHIP_IMAGES[ship.name][ship.section as number]} alt="" className="" />;
    }

    return null;
};

export default Ship;
