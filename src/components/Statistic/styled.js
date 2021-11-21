import styled from 'styled-components';
import { fontColorsStatistic } from '../../styles/colors';

export const Table = styled.table`
  display: inline-block;
  width: 280px;
  margin: auto;
  @media (min-width: 768px) {
    width: 688px;
  }
  @media (min-width: 1280px) {
    width: 700px;
    margin-top: 45px;
    margin-left: 30px;
  } ;
`;
export const Thead = styled.thead`
  display: block;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border-radius: 30px;
`;
export const Th = styled.th`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  // width: 116px;
  padding: 10px;
  text-align: start;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;
export const Col = styled.td`
  // width: 116px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${({ type }) =>
    type === '+' ? fontColorsStatistic.income : fontColorsStatistic.expenses};
  padding: 10px;
  text-align: end;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;

export const Td = styled.td`
  // width: 116px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: end;
  @media (min-width: 768px) {
    padding: 0;
    text-align: center;
    width: 116px;
  }
`;

export const Tbody = styled.tbody`
  background-color: white;

  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid;
  border-radius: 8px;
  border-left: 4px solid;
  border-color: ${({ type }) =>
    // type === 'increment'
    //   ? fontColorsStatistic.income
    //   : fontColorsStatistic.expenses};
    type === '+' ? fontColorsStatistic.income : fontColorsStatistic.expenses};
  @media (min-width: 768px) {
    background-color: transparent;
    margin: 0;
    border: none;
    text-align: center;
  }
`;

export const Tr = styled.tr`
  // display: table;
  // width: 700px;
  // height: 54px;
  display: flex;
  width: 275px;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  &:last-child {
    border: 0;
    box-shadow: none;
  }
  @media (min-width: 768px) {
    display: table;
    width: 688px;
    height: 54px;
  }
  @media (min-width: 1280px) {
    width: 700px;
  } ;
`;
export const TrHead = styled.tr`
  height: 52px;
`;
export const Text = styled.h2`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: ${fontColorsStatistic.expenses};
  @media (min-width: 1280px) {
    padding-left: 50px;
  } ;
`;
