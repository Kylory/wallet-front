import { useSelector } from 'react-redux';
import { getMonth } from '../../redux/reducers/statistic/selectors';
import Select from 'react-select';
import { SelectWrapper, StatisticsWrapper } from './styles';
import { TableStatistics } from '../../components/TableStatistics/TableStatistics';


export const StatisticView = () => {
  const month = useSelector(state => getMonth(state));
  const year = [
    { value: 123123123, label: '2020' },
    { value: 123123123, label: '2021' },
  ];

  return (
    <StatisticsWrapper>
      <SelectWrapper>
        <Select options={year}/>
        <Select options={month}/>
      </SelectWrapper>
      <TableStatistics/>
    </StatisticsWrapper>



  );


};
