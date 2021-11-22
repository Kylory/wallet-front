export const getMonth = state => {
  return  state.statistics.month.map(item => {
    const [value, label] = Object.entries(item)[0]
    return {value, label}
  })
}
export const getStatistics = state => {
  if(!state.statistics.homeState.length && state.statistics.statisticCategories.length) {
    return null
  }
  const allTransactionsDecrement = state.statistics.homeState.filter(({type}) => type === 'decrement')

  const allCategories = state.statistics.statisticCategories
  const sendStatistics = []
  allCategories.forEach((item, index) => {
    const filtredStatisticsItem = allTransactionsDecrement.filter(trasItem => {
     return  trasItem.category === item.value
    })
    if (filtredStatisticsItem.length){
      let summ = 0;
      filtredStatisticsItem.forEach(item => summ +=item.amount)
      sendStatistics.push({id: index, value: summ, color: item.color.color, title:item.title})
    }
  })
  return   sendStatistics


}

export const getIncomes = state => {
  return state.statistics.statisticsIncomes.map(item => {
    const [title, value] = Object.entries(item)[0]
    return{title, value}
  })
}

export const getStatisticsHome = state => state.statistics.homeState



