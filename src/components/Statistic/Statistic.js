import React from 'react';
import { useSelector } from 'react-redux';
import {getStatisticsHome} from '../../redux/reducers/statistic/homeTable/selector.js';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td } from "./styled";
const Statistic = () => {

  const content = useSelector(state => getStatisticsHome(state));
  const lastFiveObj = content.slice(-1 - 4);
 
   return (
    <Table>
    <Thead >
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
{lastFiveObj.map(({ date, type, category, comment, amount, balance }, index) => (
  
<Tr key={index}>
            <Td>{date}</Td>
          <Td>{type}</Td>
          <Td>{category}</Td>
          <Td>{comment}</Td>
          <Td >{amount}</Td>
          <Td>{balance}</Td>
          
        </Tr>
        ))}
</Tbody>
</Table>
   )
 }
    
 


export default Statistic;