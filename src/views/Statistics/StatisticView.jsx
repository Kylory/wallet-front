import React from 'react';
import { useSelector } from 'react-redux';
import { getMonth } from '../../redux/reducers/statistic/selectors';

import Select from 'react-select';
import { customStyles,SelectWrapper, StatisticsWrapper } from './styles';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';
import { useMedia } from '../../hooks/useMedia';
import {mediaQuery} from '../../styles/breakpoint'


export const StatisticView = () => {

  const month = useSelector(state => getMonth(state));

  const desktopScreen = useMedia(mediaQuery.m)
  const year = [
    { value: 123123123, label: '2020' },
    { value: 123123123, label: '2021' },
  ];

  return (
    <StatisticsWrapper>
      <SelectWrapper>
        <Select
          width={desktopScreen ? '166px' : '280px'}
          marginBottom = {desktopScreen ? '0px': '20px'}
          defaultValue={{label: 'Год' }}
          styles={customStyles}
          options={year}
        />
        <Select
          width={desktopScreen ? '166px' : '280px'}
          defaultValue={{label: 'Месяц' }}
          styles={customStyles}
          options={month}
        />
      </SelectWrapper>
      <TableStatistics/>
    </StatisticsWrapper>



  );


};
