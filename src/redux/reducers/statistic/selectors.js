export const getMonth = state => {
  return  state.statistics.month.map(item => {
    const [value, label] = Object.entries(item)[0]
    return {value, label}
  })
}
export const getStatistics = state => state.statistics.statisticList

export const getIncomes = state => {
  return state.statistics.statisticsIncomes.map(item => {
    const [title, value] = Object.entries(item)[0]
    return{title, value}
  })
}



