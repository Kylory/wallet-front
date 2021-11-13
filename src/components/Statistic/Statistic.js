import React, { useEffect, useState } from 'react';
import { Table, Thead, TrHead, Th, Tbody, Tr, Td } from "./styled";
const Statistic = () => {
//  const Statistic = () => {
//   const [currencyArr, setCurrencyArr] = useState([]);
//   useEffect(() => {
//     financeTable().then(currArr => setCurrencyArr(currArr));
//   }, []);
//    return (
//     <Table>
//     <Thead >
// <TrHead>
//  <Th>Дата</Th>
//  <Th>Тип</Th>
//  <Th>Категория</Th>
//  <Th>Комментарий</Th>
//  <Th>Сумма</Th>
//  <Th>Баланс</Th>
// </TrHead>
// </Thead>
// <Tbody>
// {currencyArr.map(({ date, type, category, comment, amount, balance }) => (
// <Tr >
//             <Td>{date}</Td>
//           <Td>{type}</Td>
//           <Td>{category}</Td>
//           <Td>{comment}</Td>
//           <Td >{amount}</Td>
//           <Td>{balance}</Td>
          
//         </Tr>
//         ))}
// </Tbody>
// </Table>
//    )
//  }
    
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
            <Tr >
            <Td>04.01.19</Td>
          <Td>-</Td>
          <Td>Разное</Td>
          <Td>Подарок жене</Td>
          <Td >300.00</Td>
          <Td>6 900.00</Td>
          
        </Tr>
        <Tr >
            <Td>05.01.19</Td>
          <Td>+</Td>
          <Td>Регулярный доход</Td>
          <Td>Бонус за январь</Td>
          <Td >8 000.00</Td>
          <Td>14 900.00</Td>
          
        </Tr>
        <Tr >
            <Td>07.01.19</Td>
          <Td>-</Td>
          <Td>Машина</Td>
          <Td>Масло</Td>
          <Td>1000.00</Td>
          <Td>13 900.00</Td>
          
        </Tr>
        <Tr >
            <Td>07.01.19</Td>
          <Td>-</Td>
          <Td>Продукты</Td>
          <Td>Овощи на неделю</Td>
          <Td>280.00</Td>
          <Td>13 870.00</Td>
          
        </Tr>
        <Tr >
            <Td>07.01.19</Td>
          <Td>+</Td>
          <Td>Нерегулярный доход</Td>
          <Td>Подарок на др</Td>
          <Td>1000.00</Td>
          <Td>14870.00</Td>
          
        </Tr>
        </Tbody>
      </Table>
     
    ) }

export default Statistic;