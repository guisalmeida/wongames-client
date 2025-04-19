import { screen } from '@testing-library/react';

import Footer from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Footer />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = renderWithTheme(<Footer />).container;
  });

  it('should match the snapshoot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render 4 column topics', () => {
    expect(screen.getAllByRole('heading')).toHaveLength(4);
  });

  it('should have contact us heading', () => {
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it('should have follow us heading', () => {
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();
  });

  it('should have links heading', () => {
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();
  });

  it('should have location heading', () => {
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument();
  });
});
