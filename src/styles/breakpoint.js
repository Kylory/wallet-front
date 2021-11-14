import { css } from 'styled-components';

const breakpoints = {
  s: '320px',
  m: '768px',
  l: '1280px',
};

export const mediaQuery = {
  s: `(min-width: ${breakpoints.s})`,
  m: `(min-width: ${breakpoints.m})`,
  l: `(min-width: ${breakpoints.l})`,


}


export const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const breakpointMax = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

