import styled from 'styled-components';
import { breakpoint, breakpointMax } from '../../styles/breakpoint';

const Wrapper = styled.div`
  ${breakpointMax.l`
    display: flex;
  `};
  ${breakpoint.l`
    padding-right: 30px;
    border-right: 1px solid #E7E5F2;
    // box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
  `};
`;

export { Wrapper };
