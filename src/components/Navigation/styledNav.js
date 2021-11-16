import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoint, breakpointMax } from '../../styles/breakpoint';

const Wrapper = styled.div`
  display: flex;

  ${breakpointMax.m`
    margin-bottom: 10px;
    padding-top: 10px;
    justify-content: center;
  `};
  ${breakpointMax.l`
    // margin-bottom: 20px;
    // padding-top: 30px;
  `};
  ${breakpoint.m`
    margin-bottom: 20px;
    padding-top: 30px;

    flex-direction: column;
  `};
  ${breakpoint.l`
    margin-bottom: 30px;
    padding-top: 40px;
  `};
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  ${breakpoint.s`
    &:not(:last-child) {
      margin-right: 30px;
    }
  `};
  ${breakpoint.m`
    margin-bottom: 10px;
  `};

  &.active {
    font-weight: bold;
    fill: #4a56e2;
  }
`;
const LinkText = styled.p`
  padding-left: 20px;
`;

const IconWrapper = styled.div`
  svg {
    fill: #6e78e8;
    ${StyledLink}.active & {
      fill: #4a56e2;
    }
  }
  /* &:hover {
    fill: #4a56e2;
  } */
`;

export { Wrapper, StyledLink, LinkText, IconWrapper };
