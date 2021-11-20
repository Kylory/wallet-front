const getAllTransactions = state => state.transactions.allTransactions;
const getAddTransactions = state => state.transactions.addTransactions;
const getAllQueryStatistics = state => state.transactions.queryStatistics;
const getIsModalAddTransactionOpen = state => state.transactions.modalTransaction;
const getTransactionCategories = state => state.transactions.transactionCategories;


export {
  getAllTransactions,
  getAddTransactions,
  getAllQueryStatistics,
  getIsModalAddTransactionOpen,
  getTransactionCategories
};


