import React, { useEffect, useState } from 'react';
import fetchExchangeRate from '../services/exchangeRateAPI/exchangeRateAPI';
// import { useDispatch } from 'react-redux';

const ExchangeRate = () => {
  const [currencyArr, setCurrencyArr] = useState([]);
  useEffect(() => {
    fetchExchangeRate().then(currArr => setCurrencyArr(currArr));
  }, []);
  // console.log(currencyArr[0].buy.slice(0, 5));
  return (
    <table>
      <thead>
        <tr>
          <th>Валюта</th>
          <th>Покупка</th>
          <th>Продажа</th>
        </tr>
      </thead>

      <tbody>
        {currencyArr.map(({ ccy, buy, sale }) => (
          <tr key={ccy}>
            <td>{ccy}</td>
            <td>{buy}</td>
            <td>{sale}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ExchangeRate;
