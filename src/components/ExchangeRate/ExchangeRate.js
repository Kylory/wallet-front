import React, { useEffect, useState } from 'react';
import fetchExchangeRate from '../services/exchangeRateAPI/exchangeRateAPI';
// import { useDispatch } from 'react-redux';

import { Wrapper, Table, TableHead, StyledTh, StyledTd } from './styledComp';

const ExchangeRate = () => {
  const [currencyArr, setCurrencyArr] = useState([]);
  useEffect(() => {
    fetchExchangeRate().then(currArr => {
      currArr.pop();
      setCurrencyArr(currArr);
    });
  }, []);
  return (
    <Wrapper>
      <Table>
        <TableHead>
          <tr>
            <StyledTh>Валюта</StyledTh>
            <StyledTh>Покупка</StyledTh>
            <StyledTh>Продажа</StyledTh>
          </tr>
        </TableHead>

        <tbody>
          {currencyArr.map(({ ccy, buy, sale }) => (
            <tr key={ccy}>
              <StyledTd>{ccy}</StyledTd>
              <StyledTd>{buy}</StyledTd>
              <StyledTd>{sale}</StyledTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default ExchangeRate;
