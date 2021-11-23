import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatisticsHome } from '../../redux/reducers/statistic/selectors';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td, Col, Text } from './styled';
import Media from 'react-media';
import Balance from 'components/Balance/Balance.js';
import { getAllTransactions } from 'redux/reducers/statistic/statisticReducer.js';
import { transactionsOperations } from 'redux/transactions';
import moneyService from 'services/moneyService/moneyService';

const Statistic = () => {
  const content = useSelector(getStatisticsHome);

  const useContent = () => {
    if (!content) {
      const message = [];
      return message;
    } else {
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

  const newObject = JSON.stringify(lastFiveObj);
  const newObjetct2 = JSON.parse(newObject).reverse();
  newObjetct2.map(item => {
    const listType = item.type;
    const type = listType === 'increment' ? '+' : '-';

    const comment = item.comment;
    const amount = moneyService(item.amount);
    const balance = moneyService(item.balance);

    const listCategory = () => {
      if (item.category === 'main') {
        return (item.category = 'Основные расходы');
      } else if (item.category === 'car') {
        return (item.category = 'Машина');
      } else if (item.category === 'food') {
        return (item.category = 'Продукты');
      } else if (item.category === 'evolution') {
        return (item.category = 'Забота о себе');
      } else if (item.category === 'children') {
        return (item.category = 'Забота о детях');
      } else if (item.category === 'home') {
        return (item.category = 'Товары для дома');
      } else if (item.category === 'education') {
        return (item.category = 'Образование');
      } else if (item.category === 'other') {
        return (item.category = 'Другое');
      } else if (item.category === 'regularIncome') {
        return (item.category = 'Регулярный доход');
      } else if (item.category === 'irregularIncome') {
        return (item.category = 'Нерегулярный доход');
      }
      return item.category;
    };

    const category = listCategory();

    const dateItem = item.date;

    const DateAll = () => {
      let correctDate = new Date(dateItem).toLocaleDateString();

      if (correctDate.length < 10) {
        correctDate = '0' + correctDate;
      }
      return correctDate;
    };

    const date = DateAll();

    const newItem = { date, comment, type, amount, balance, category };
    return array.push(newItem);
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
