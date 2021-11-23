import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

export const DoughnatStatisticsWrapper = styled.div`
  ${breakpoint.m`
    margin-right: 30px;
  `}
  ${breakpoint.l`
    margin: 0 30px;
  `}
`;

export const DoughnatWrapper = styled.div`
  height: 280px;
  width: 280px;
  margin: 10px 0 30px;

  ${breakpoint.m`
    flex-direction: row;
    width: 320px;
    height: 320px;
  `}
`;

export const H2 = styled.h2`
  text-align: center;

  ${breakpoint.m`
  text-align: unset;
  `}
`;
