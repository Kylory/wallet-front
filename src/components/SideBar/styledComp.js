import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  ${breakpoint.s`
  `};
  ${breakpoint.m`
    // display: flex;
    margin-bottom: 40px;
  `};
  ${breakpoint.l`
    display:block;
    padding-right: 30px;
    border-right: 1px solid #E7E5F2;
    // box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
  `};
`;

export { Wrapper };
