import styled from 'styled-components';

import { viewColors, fontColorsStatistic } from '../../styles/colors';

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  line-height: 0.67em; 
`;


export const TH = styled.th`
  padding-left: 30px;
  padding-right: 15px;
  font-size: 18px;
  font-weight: bold;
`;
export const TR = styled.tr`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background-color: ${viewColors.white};
  

`;
export const THead = styled.tbody`
`;
export const ColorBox = styled.div`
  width:24px;
  height:24px;
  border-radius: 2px;
  margin-right: 16px;
  background-color: ${({ color }) => color ? color : '#FFF'};
`;

export const TBody = styled.tbody `
  font-size: 16px;
`;
export const TableRowBody = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid ${viewColors.whiteGray}
`

export const TDRight = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TableFoot = styled.tfoot`
font-weight: bold;
font-size: 16px;
`;

export const TableRowFooter = styled(TableRowBody)`
   font-weight: bold;
    border-bottom: none;
`
export const TdFooterLeft = styled.td`
  color: ${({title}) => title === 'income' ? fontColorsStatistic.income : fontColorsStatistic.expenses}

`

