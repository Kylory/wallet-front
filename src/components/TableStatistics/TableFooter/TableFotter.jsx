import styled from 'styled-components';

const TableFoot = styled.tfoot`
font-weight: bold;
font-size: 16px;
`;


export const TotalStatistics = () => {
 return (
   <TableFoot>
     <tr>
       <td>Расходы</td>
     </tr>
     <tr>
       <td>Доходы</td>
     </tr>
   </TableFoot>
 )

};
