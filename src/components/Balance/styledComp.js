import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

const Wrapper = styled.div`
  width: 280px;
  padding: 8px 30px;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 30px;
  ${breakpoint.s`
    margin-right: auto;
    margin-left: auto;
  `};
  ${breakpoint.m`
    width: 334px;
  `};
  ${breakpoint.l`
    width: 350px;
  `};
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(166, 166, 166, 1);
  /* padding-bottom: 10px; */
  margin: 0;
`;

const Summ = styled.p`
  font-family: Poppins;
  font-size: 30px;
  line-height: 1.5;
  margin: 0;
`;

export { Wrapper, Text, Summ };
