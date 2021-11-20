import React, { useEffect, useState } from 'react';
import fetchExchangeRate from 'services/exchangeRateAPI/exchangeRateAPI';
import moneyService from 'services/moneyService/moneyService';

import { Wrapper, Table, TableHead, StyledTh, StyledTd } from './styledComp';

const ExchangeRate = () => {
  const [loading, setLoading] = useState(false);
  const [currencyArr, setCurrencyArr] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    let newCurrArr = [];
    fetchExchangeRate()
      .then(currArr => {
        currArr.pop();

        currArr.map(item => {
          const newBuy = moneyService(Number(item.buy));
          const newSale = moneyService(Number(item.sale));
          const newCcy = item.ccy;
          const newItem = { newCcy, newBuy, newSale };
          // console.log(newItem);
          return newCurrArr.push(newItem);
        });
        // console.log(newCurrArr);
        setCurrencyArr(newCurrArr);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
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
        {error && (
          <h3
            style={{
              paddingLeft: '35px',
              width: '235px',
              height: '160px',
              alignItems: 'center',
              display: 'flex',
              color: 'white',
            }}
          >
            {error.message} <br />
            Reload the page
          </h3>
        )}
        {loading && (
          <tbody>
            <tr>
              <StyledTd>Loading...</StyledTd>
            </tr>
          </tbody>
        )}
        <tbody>
          {currencyArr.map(({ newCcy, newBuy, newSale }) => (
            <tr key={newCcy}>
              <StyledTd>{newCcy}</StyledTd>
              <StyledTd>{newBuy}</StyledTd>
              <StyledTd>{newSale}</StyledTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export default ExchangeRate;
