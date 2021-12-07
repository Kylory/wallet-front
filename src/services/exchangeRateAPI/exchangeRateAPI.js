function fetchExchangeRate() {
  return fetch(
    `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('There is no data'));
  });
}

export default fetchExchangeRate;
