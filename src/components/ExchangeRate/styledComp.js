import styled from 'styled-components';
import { breakpoint, breakpointMax } from '../../styles/breakpoint';
const imgUrl = require('../../icons/background.svg').default;

const Wrapper = styled.div`
  margin-bottom: 0;
  ${breakpointMax.m`
    // display:none;
  `};
  ${breakpointMax.l`
  margin-top: 20px;
  `};
`;

const Table = styled.table`
  border-radius: 30px;
  font-size: 18px;
  line-height: 1.59;
  table-layout: fixed;
  overflow: hidden;
  border-collapse: collapse;
  border: 2px solid rgb(177, 172, 199);
  background-color: #4a56e2;
  box-shadow: 4px 4px 8px 0px rgb(0 0 0 / 30%);
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-position: bottom;
  ${breakpoint.s`
    width: 280px;
    height: 174px;
    background-size: 280px 93px;
  `};
  ${breakpoint.m`
    width: 334px;
    background-size: 334px 111px;
  `};
  ${breakpoint.l`
    display: block;
    width: 350px;
    height: 347px;
    margin-bottom: 50px;
    background-size: 350px 134px;
  `};
`;

const TableHead = styled.thead`
  background-color: #626ce5;
  color: #fff;
`;

const StyledTh = styled.th`
  text-align: center;
  ${breakpoint.s`
    padding: 10px;
    // padding-left: 17px;
  `};
  ${breakpoint.m`
    padding-left: 20px;
  `};
  ${breakpoint.l`
    padding: 19px;
    padding-left: 30px;
  `};
`;

const StyledTd = styled.td`
  font-size: 16px;
  line-height: 1.5;
  text-align: start;
  color: #fff;
  ${breakpoint.s`
    padding-left: 17px;
  `};
  ${breakpoint.m`
    padding: 10px;
    padding-left: 28px;
    text-align: start;
  `};
  ${breakpoint.l`
    padding: 13px;
    padding-left: 30px;
  `};
`;

export { Wrapper, Table, TableHead, StyledTh, StyledTd };
