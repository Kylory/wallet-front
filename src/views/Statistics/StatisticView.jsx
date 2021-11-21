import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonth } from '../../redux/reducers/statistic/selectors';

import Select from 'react-select';
import { customStyles, SelectWrapper, StatisticsWrapper } from './styles';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';
import { useMedia } from '../../hooks/useMedia';
import { mediaQuery } from '../../styles/breakpoint';
import { getTransactionCategories, getTransactionsByPeriod } from '../../redux/reducers/statistic/statisticReducer';


export const StatisticView = () => {
  const month = useSelector(state => getMonth(state));

  const [monthSelect, setMonthSelect] = useState({ value: 'month', label: 'Месяц', numberValue: null });
  const [yearSelect, setYearSelect] = useState({ label: 'Год', value: null });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const handleMonthChange = (value) => {
    const monthIndexSelect = month.findIndex(i => i.value === value.value);
    setMonthSelect(prevState => {
      return {
        ...prevState,
        value: value.value,
        label: value.label,
        numberValue: monthIndexSelect,
      };
    });
  };
  const handleChangeYear = (value) => {
    setYearSelect(value);
  };


  const desktopScreen = useMedia(mediaQuery.m);
  const year = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
  ];
  useEffect(() => {

   if (!monthSelect.numberValue || !yearSelect.value){
     return
   }
      dispatch(getTransactionsByPeriod({month:monthSelect.numberValue, year:yearSelect.value}));

  }, [monthSelect, yearSelect, dispatch]);
  return (
    <StatisticsWrapper>
      <SelectWrapper>
        <Select
          width={desktopScreen ? '166px' : '280px'}
          marginBottom={desktopScreen ? '0px' : '20px'}
          defaultValue={yearSelect}
          styles={customStyles}
          options={year}
          onChange={handleChangeYear}
        />
        <Select
          width={desktopScreen ? '166px' : '280px'}
          defaultValue={monthSelect}
          styles={customStyles}
          options={month}
          onChange={handleMonthChange}
        />
      </SelectWrapper>
      <TableStatistics/>
    </StatisticsWrapper>


  );


};
