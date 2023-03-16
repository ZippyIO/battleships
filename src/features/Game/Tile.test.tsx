import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Tile, { TileObject } from './Tile';

describe('Tile Component', () => {
    const columnProp: TileObject = {
        cindex: 1,
        ship: null,
        hit: false,
    };

    test('should render', () => {
        render(
            <Tile
                row={1}
                column={columnProp}
                gameStatus="setup"
                ship={null}
                receiveAttack={vi.fn()}
                placeShip={vi.fn()}
            />,
        );

        expect(screen.getByRole('button')).toBeTruthy();
    });

    test('should show hit', () => {
        const column = { ...columnProp, hit: true };

        render(
            <Tile
                row={1}
                column={column}
                gameStatus="setup"
                ship={null}
                receiveAttack={vi.fn()}
                placeShip={vi.fn()}
            />,
        );

        expect(screen.getByRole('button')).toHaveClass('bg-green-500');
    });

    test('should show miss', () => {
        const column = { ...columnProp, hit: false };

        render(
            <Tile
                row={1}
                column={column}
                gameStatus="setup"
                ship={null}
                receiveAttack={vi.fn()}
                placeShip={vi.fn()}
            />,
        );

        expect(screen.getByRole('button')).toHaveClass('bg-orange-500');
    });
});
