import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it("should render a black label when color='black' is passed", () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render the width default when size is not passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render the width large when is passed to size', () => {
    renderWithTheme(<Logo color="black" size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a bigger logo without text if hideText', () => {
    renderWithTheme(<Logo $hideText={true} />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        // don´t remove double whitespace this fix an error from the lib:
        // https://github.com/styled-components/jest-styled-components/issues/430
        media: '(max-width:  768px)'
      }
    );
  });
});
