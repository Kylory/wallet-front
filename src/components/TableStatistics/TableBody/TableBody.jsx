import React from 'react';
import { useSelector } from 'react-redux';
import { getStatistics } from '../../../redux/reducers/statistic/selectors';
import { ColorBox, TableRowBody, TBody, TDRight } from '../styles';

export const TableBody = () => {
  const content = useSelector(state => getStatistics(state))
  return (
    <TBody>
    {content ? content.map((item) => {
      return (
        <TableRowBody key={item.id}>
          <TDRight>
            <ColorBox color={item.color}/>
            {item.title}
          </TDRight>
          <td>{item.value}</td>
        </TableRowBody>
      )
    }): <TableRowBody>
      <TDRight>
        <ColorBox color='black'/>
        Расходов не найдено
      </TDRight>
      <td>0</td>
    </TableRowBody>}
    </TBody>
  )


}
