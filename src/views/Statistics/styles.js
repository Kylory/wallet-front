import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';
import { viewColors, fontColorsStatistic } from '../../styles/colors';

export const StatisticsWithDoughnatWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint.m`
    flex-direction: row;
    align-items: normal;
  `}
`;

export const StatisticsWrapper = styled.div`
  width: 280px;
  ${breakpoint.m`
    width: 350px;
  `}
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* &:not(:last-child) { */
  margin-right: 10px;
  /* } */
  ${breakpoint.m`
    flex-direction: row;
  `}
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    marginBottom: state.selectProps.marginBottom,
    color: state.isSelected ? fontColorsStatistic.expenses : viewColors.black,
    backgroundColor: 'none',
  }),
  control: (_, { selectProps: { width, marginBottom } }) => ({
    display: 'flex',
    width: width,
    marginBottom: marginBottom,
    height: 50,
    paddingLeft: 20,
    fontSize: 16,
    color: viewColors.black,
    border: '1px solid #000000',
    borderRadius: 30,
    marginRight: 10,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};
