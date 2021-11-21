import styled from 'styled-components';

import { breakpoint, breakpointMax } from 'styles/breakpoint';
import { viewColors } from '../../styles/colors';

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
`;
export const HeaderWrapper = styled.header`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: white;
  ${breakpointMax.m`
    padding: 15px 20px;
  `};
  ${breakpoint.m`
    padding: 15px 40px;
  `};
  ${breakpoint.l`
    padding: 25px 85px;
  `};
`;
export const ExitWrapper = styled.div`
  display: flex;
  font-size: 18px;
  cursor: pointer;
  color: ${viewColors.gray4};
  p {
    margin-right: 10px;
  }
`;
