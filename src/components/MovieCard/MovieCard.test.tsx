import { render, screen } from '@testing-library/react';
import { MovieCard } from '.';

describe('MovieCard component', () => {
  it('renders correctly', () => {
    render(
      <MovieCard
        title="Três Homens em Conflito"
        release="1987"
        poster="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6CoXpyZRqYJF3lTfxjWIahO6qM.jpg"
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
