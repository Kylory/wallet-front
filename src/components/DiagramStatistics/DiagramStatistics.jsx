import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getStatistics } from '../../redux/reducers/statistic/selectors';
import { DoughnatStatisticsWrapper, DoughnatWrapper } from './styles';

export const DoughnutChart = () => {
  const content = useSelector(state => getStatistics(state));
    const data = {
    datasets: [
      {
        data: content,
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
        cutout: 100,
      },
    ],
  };

  return (
    <>
      <DoughnatStatisticsWrapper>
        <div>
          <h2>Статистика</h2>
        </div>
        <DoughnatWrapper>
          <Doughnut data={data} />
        </DoughnatWrapper>
      </DoughnatStatisticsWrapper>
    </>
  );
};