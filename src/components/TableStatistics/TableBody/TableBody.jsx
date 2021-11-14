import React from 'react';
import { useSelector } from 'react-redux';
import { getStatistics } from '../../../redux/reducers/statistic/selectors';
import { ColorBox, TableRowBody, TBody, TDRight } from '../styles';

export const TableBody = () => {
  const content = useSelector(state => getStatistics(state))


  return (
    <TBody>
    {content.map((item, index) => {
      return (
        <TableRowBody key={index}>
          <TDRight>
            <ColorBox color={item.color}/>
            {item.tittle}
          </TDRight>
          <td>{item.value}</td>
        </TableRowBody>
      )
    })}
    </TBody>
  )


}
