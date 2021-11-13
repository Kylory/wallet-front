import {statisticColors} from '../../../styles/colors'
const initialState = {
  statisticList: [
    {color: statisticColors.basicExpenses, tittle: 'Основные расходы', value: 2000},
    {color: statisticColors.products, tittle: 'Продукты', value: 1000},
    {color: statisticColors.car, tittle: 'Машина', value: 3000},
    {color: statisticColors.health, tittle: 'Забота о себе', value: 2500},
    {color: statisticColors.children, tittle: 'Забота о детях', value: 1000},
    {color: statisticColors.house, tittle: 'Товары для дома', value: 2000},
    {color: statisticColors.education, tittle: 'Образование', value: 100},
    {color: statisticColors.hobby, tittle: 'Досуг', value: 4000},
    {color: statisticColors.another,tittle: 'Другие Расходы',  value: 600},
  ],
  year: [],
  month:[
    {january: "январь"},
    {february : "февраль"},
    {march : "март"},
    {april : "апрель"},
    {may: "май"},
    {june: "июнь"},
    {july: "июль"},
    {august: "август"},
    {september: "сентябрь"},
    {october: "октябрь"},
    {november: "ноябрь"},
    {december: 'декабрь'}
  ],
  income: 8000,
  expenses: 9000



};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

