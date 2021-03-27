import { render, screen } from '@testing-library/react';
import Cats from './Cats';

test('renders all cats', () => {
    let mockPets = {
        Male: ["Max"],
        Female: ["Garfield"]
    };
    render(<Cats pets={mockPets} />);
    const linkElement = screen.getByText(/Max/i);
    expect(linkElement).toBeInTheDocument();
});