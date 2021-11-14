import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 350px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  ); */
  margin-bottom: 50px;
`;
const Table = styled.table`
  display: block;
  border-radius: 30px;
  width: 350px;
  height: 347px;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 1.59;
  table-layout: fixed;
  overflow: hidden;
  border-collapse: collapse;
  border: 2px solid rgb(177, 172, 199);
  background-color: #4a56e2;
  box-shadow: 4px 4px 8px 0px rgb(0 0 0 / 30%);
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  ); */
`;
const TableHead = styled.thead`
  background-color: cornflowerblue;
  /* opacity: 0.2; */
  /* letter-spacing: 1.7px; */
  color: #fff;
`;

const StyledTh = styled.th`
  padding: 19px;
  padding-left: 30px;
  text-align: center;
`;

const StyledTd = styled.td`
  font-size: 16px;
  line-height: 1.5;
  padding: 13px;
  padding-left: 30px;
  text-align: start;
  color: #fff;
  /* background-color: #4a56e2; */
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -7.46%,
    rgba(255, 255, 255, 0) 100%
  ); */
`;
export { Wrapper, Table, TableHead, StyledTh, StyledTd };
