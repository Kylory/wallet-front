import { TableFoot, TableRowFooter, TdFooterLeft } from '../styles';
import { useSelector } from 'react-redux';
import {getIncomes} from '../../../redux/reducers/statistic/selectors';

export const TotalStatistics = () => {
const incomes = useSelector(state => getIncomes(state))

 return (
   <TableFoot>
     {incomes.map(({title, value}, index)=> {
       return (
         <TableRowFooter key={index}>
           <td>{title === "income" ? 'Доходы' : 'Расходы'}</td>
           <TdFooterLeft title={title}>{value}</TdFooterLeft>
         </TableRowFooter>
       )
     })}

   </TableFoot>
 )

};
