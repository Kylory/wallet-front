import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatisticsHome } from '../../redux/reducers/statistic/selectors';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td, Col, Text } from './styled';
import Media from 'react-media';
import Balance from 'components/Balance/Balance.js';
import { getAllTransactions } from 'redux/reducers/statistic/statisticReducer.js';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'redux/transactions';

const Statistic = () => {
  const content = useSelector(getStatisticsHome);
  const transactionCategories = useSelector(
    transactionsSelectors.getTransactionCategories,
  );
  console.log('transactionCategories', transactionCategories);

  const useContent = () => {
    if (!content) {
      const message = [];
      return message;
    }
    // else if(content.length > 5){
    //   const ap = content.slice(-1 - 4);
    //   return ap;
    // }
    else {
      return content;
    }
  };

  const lastFiveObj = useContent();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
    dispatch(transactionsOperations.getCategories());
  }, [dispatch]);

  let array = [];
  lastFiveObj.map(item => {
    const comment = item.comment;
    // const type = item.type;
    let type = item.type === 'increment' ? '+' : '-';
    const amount = item.amount;
    const balance = item.balance;
    const category = item.category;
    // console.log('category1', category1);
    // const category = transactionCategories.map(
    //   i =>
    //     // console.log(Object.values(i)[0]),
    //     // Object.values(i)[0],
    //     i.category1,
    // );
    // Object.keys(e);

    let dateItem = [];

    const year = new Date(item.date).getFullYear();
    const month = new Date(item.date).getMonth() + 1;
    const day = new Date(item.date).getDate();

    dateItem.push(day, month, year);
    const date = dateItem.join('.');

    const newItem = { date, comment, type, amount, balance, category };
    array.push(newItem);
  });

  return (
    <>
      <Media query={{ maxWidth: 767 }}>
        <>
          <Balance />
          {content ? (
            <Table>
              {array.map(
                (
                  { date, type, category, comment = '-', amount, balance },
                  index,
                ) => (
                  <Tbody type={type} key={index}>
                    <Tr>
                      <Th>Дата</Th>
                      <Td>{date}</Td>
                    </Tr>
                    <Tr>
                      <Th>Тип</Th>
                      <Td>{type}</Td>
                    </Tr>
                    <Tr>
                      <Th>Категория</Th>
                      <Td>{category}</Td>
                    </Tr>
                    <Tr>
                      <Th>Комментарий</Th>
                      <Td>{comment}</Td>
                    </Tr>
                    <Tr>
                      <Th>Сумма</Th>
                      <Col type={type}>{amount}</Col>
                    </Tr>
                    <Tr>
                      <Th>Баланс</Th>
                      <Td>{balance}</Td>
                    </Tr>
                  </Tbody>
                ),
              )}
            </Table>
          ) : (
            <Text>Пока нет данных по операциям!</Text>
          )}
        </>
      </Media>
      <Media query={{ minWidth: 768 }}>
        {content ? (
          <Table>
            <Thead>
              <TrHead>
                <Th>Дата</Th>
                <Th>Тип</Th>
                <Th>Категория</Th>
                <Th>Комментарий</Th>
                <Th>Сумма</Th>
                <Th>Баланс</Th>
              </TrHead>
            </Thead>
            <Tbody>
              {array.map(
                (
                  { date, type, category, comment = '-', amount, balance },
                  index,
                ) => (
                  <Tr key={index}>
                    <Td>{date}</Td>
                    <Td>{type}</Td>
                    <Td>{category}</Td>
                    <Td>{comment}</Td>
                    <Col type={type}>{amount}</Col>
                    <Td>{balance}</Td>
                  </Tr>
                ),
              )}
            </Tbody>
          </Table>
        ) : (
          <Text>Пока нет данных по операциям!</Text>
        )}
      </Media>
    </>
  );
};

export default Statistic;
