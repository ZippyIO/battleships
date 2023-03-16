import { render, screen } from '@testing-library/react';
import Ship from './Ship';

test('renders ship', () => {
    const component = render(<Ship ship={{ name: 'carrier', length: 5, section: 0 }} />);
    expect(component.getByRole('img')).toBeInTheDocument();
});

test('renders correct ship section images', () => {
    const { rerender } = render(<Ship ship={{ name: 'carrier', length: 5, section: 0 }} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/src/assets/ships/carrier_1.png');

    rerender(<Ship ship={{ name: 'carrier', length: 5, section: 1 }} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/src/assets/ships/carrier_2.png');

    rerender(<Ship ship={{ name: 'carrier', length: 5, section: 2 }} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/src/assets/ships/carrier_3.png');

    rerender(<Ship ship={{ name: 'carrier', length: 5, section: 3 }} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/src/assets/ships/carrier_4.png');

    rerender(<Ship ship={{ name: 'carrier', length: 5, section: 4 }} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/src/assets/ships/carrier_5.png');
});
