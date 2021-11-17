import React, { useEffect, useState } from 'react';
import fetchExchangeRate from '../../services/exchangeRateAPI/exchangeRateAPI';
// import { useDispatch } from 'react-redux';

import { Wrapper, Table, TableHead, StyledTh, StyledTd } from './styledComp';

const ExchangeRate = () => {
  const [loading, setLoading] = useState(false);
  const [currencyArr, setCurrencyArr] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetchExchangeRate()
      .then(currArr => {
        currArr.pop();
        setCurrencyArr(currArr);
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
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            {error.message} <br />
            Reload the page
          </h1>
        )}
        {loading && (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              padding: '40px',
            }}
          >
            Loading...
          </p>
        )}
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
