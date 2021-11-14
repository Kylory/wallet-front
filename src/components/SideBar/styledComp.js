import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

const Wrapper = styled.div`
  width: 465px;
  padding-bottom: 40px;
  padding-left: 50px;
  border-right: 1px solid #e7e5f2;
  background-color: rgba(238, 233, 233, 1);
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
    1px 0px 0px rgba(255, 255, 255, 0.6);
  /* ${breakpoint.m`
    display: flex;
    color: red;
  `}; */
`;

export { Wrapper };
