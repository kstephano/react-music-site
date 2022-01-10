import { screen } from '@testing-library/react';
import Artist from '.';

describe('Artist', () => {
    beforeEach(() => {
        render(<Artist />)
    });

    test('renders a nav bar', () => {
        const navbar = screen.getByRole('nav', { name: "nav-bar" });
        expect(navbar).toContainElement(<Link/>);
        expect(navbar).toContainElement(<Button/>);
    });
})
