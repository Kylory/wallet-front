
const initialState =  [
      {date: '04.01.19', type: '-', category: 'Разное', comment: 'Подарок жене', amount: 300.00, balance: '6 900.00'},
      {date: '04.01.19', type: '-', category: 'Разное', comment: 'Подарок жене', amount: 300.00, balance: '6 900.00'},
      {date: '04.01.19', type: '-', category: 'Разное', comment: 'Подарок жене', amount: 300.00, balance: '6 900.00'},
      {date: '04.01.19', type: '-', category: 'Разное', comment: 'Подарок жене', amount: 300.00, balance: '6 900.00'},
      {date: '05.01.19', type: '+', category: 'Регулярный доход', comment: 'Бонус за январь', amount: 8000.00, balance: '14 900.00'},
      {date: '07.01.19', type: '-', category: 'Машина', comment: 'Масло', amount: 1000.00, balance: '13 900.00'},
      {date: '07.01.19', type: '-', category: 'Продукты', comment: 'Овощи на неделю', amount: 280.00, balance: '13 870.00'},   
      {date: '07.01.19', type: '+', category: 'Нерегулярный доход', comment: 'Подарок на др', amount: 1000.00, balance: '14870.00'},
     
    ];

  
  export const statisticsHomeReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  