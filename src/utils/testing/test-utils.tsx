import { cleanup, render, RenderOptions } from '@testing-library/react';
import { afterEach } from 'vitest';
import { useLocation } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

const customRender = (ui: JSX.Element, options?: RenderOptions) => {
    render(ui, {
        wrapper: ({ children }) => children,
        ...options,
    });
};

export const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
