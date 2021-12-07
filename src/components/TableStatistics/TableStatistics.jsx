import React from 'react';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { Table } from './styles';
import { TotalStatistics } from './TableFooter/TableFotter';

export const TableStatistics = () => {
  return (
    <Table>
      <TableHead/>
      <TableBody/>
      <TotalStatistics/>
    </Table>
  );
};
