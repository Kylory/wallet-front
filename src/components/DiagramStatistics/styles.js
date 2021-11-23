import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

export const DoughnatStatisticsWrapper = styled.div`
  ${breakpoint.l`
    margin: 0 30px 0;
  `}
  
`


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

