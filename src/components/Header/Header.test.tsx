import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesquisa')).toBeInTheDocument();
  });
});
