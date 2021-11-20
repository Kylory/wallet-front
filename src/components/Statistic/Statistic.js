import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatisticsHome } from '../../redux/reducers/statistic/selectors';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td, Col } from './styled';
import Media from 'react-media';
import Balance from 'components/Balance/Balance.js';
import { getAllTransactions } from 'redux/reducers/statistic/statisticReducer.js';

const Statistic = () => {
  const content = useSelector(getStatisticsHome);
  const lastFiveObj = content.slice(-1 - 4);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTransactions())
  },[dispatch])
let array =[]
  lastFiveObj.map(item => {
    
  const comment = item.comment;
  const type = item.type;
  const amount = item.amount;
  const balance = item.balance;
  const category = item.category;
    
  let dateItem = [];

const year = new Date(item.date).getFullYear()
const month = new Date(item.date).getMonth()+1
const day = new Date(item.date).getDate()
    
    
    dateItem.push(day, month, year)
    
    const date = dateItem.join('.')
    const newItem = {date, comment , type, amount, balance, category}
    array.push(newItem)
  });
 

  return (
    <>
      <Media query={{ maxWidth: 767 }}>
        <>
          <Balance />
          <Table>
            {array.map(
              ({ date, type, category, comment = '-', amount, balance }, index) => (
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
        </>
      </Media>
      <Media query={{ minWidth: 768 }}>
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
              ({ date, type, category, comment ='-', amount, balance }, index) => (
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
      </Media>
    </>
  );
};

export default Statistic;
