import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonProps, RibbonColors } from '.';
import theme from '../../styles/theme';

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left: 0 solid ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
      filter: brightness(80%);
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  min-width: 12.5rem;
  position: absolute;
  top: ${theme.spacings.xsmall};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    border-style: solid;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-bottom-width: 1rem;
  }

  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`;
