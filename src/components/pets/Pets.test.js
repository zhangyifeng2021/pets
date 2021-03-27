import { render, screen } from '@testing-library/react';
import Pets from './Pets';

test('renders all pets', () => {
    const link = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';
    render(<Pets link={link} />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});
