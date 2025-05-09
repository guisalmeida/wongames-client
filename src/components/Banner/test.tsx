import { render, screen } from '@testing-library/react';

import Banner from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Banner />', () => {
  const bannerPropsMock = {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  };

  it('should render correctly', () => {
    renderWithTheme(<Banner {...bannerPropsMock} />);

    expect(screen.getByText(bannerPropsMock.title)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...bannerPropsMock}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });

  it('should match with the snapshot', () => {
    const { container } = renderWithTheme(<Banner {...bannerPropsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
