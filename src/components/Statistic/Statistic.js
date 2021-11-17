import React from 'react';
import { useSelector } from 'react-redux';
import { getStatisticsHome } from '../../redux/reducers/statistic/homeTable/selector.js';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td, Col } from './styled';
import Media from 'react-media';

const Statistic = () => {
  const content = useSelector(state => getStatisticsHome(state));
  const lastFiveObj = content.slice(-1 - 4);

  return (
    <>
      <Media query={{ maxWidth: 767 }}>
        <Table>
          {lastFiveObj.map(
            ({ date, type, category, comment, amount, balance }, index) => (
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
            {lastFiveObj.map(
              ({ date, type, category, comment, amount, balance }, index) => (
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

