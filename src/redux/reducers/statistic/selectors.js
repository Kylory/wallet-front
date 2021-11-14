export const getMonth = state => {
  return  state.statistics.month.map(item => {
    const [value, label] = Object.entries(item)[0]
    return {value, label}
  })
}
export const getStatistics = state => state.statistics.statisticList

export const getIncome = state => state.statistics.income
export const getExpenses = state => state.statistics.expenses


