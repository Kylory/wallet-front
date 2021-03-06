import { createAction } from '@reduxjs/toolkit';

export const openModalTransaction = createAction('transactions/openModalTransaction',);
export const closeModalTransaction = createAction('transactions/closeModalTransaction',);

export const fetchTransactionRequest = createAction('transactions/fetchTransactionRequest');
export const fetchTransactionSuccess = createAction('transactions/fetchTransactionSuccess');
export const fetchTransactionError = createAction('transactions/fetchTransactionError');
export const addTransactionRequest = createAction('transactions/addTransactionRequest');
export const addTransactionSuccess = createAction('transactions/addTransactionSuccess');
export const addTransactionError = createAction('transactions/addTransactionError');

export const getQueryStatisticsRequest = createAction('transactions/getQueryStatisticsRequest');
export const getQueryStatisticsSuccess = createAction('transactions/getQueryStatisticsSuccess');
export const getQueryStatisticsError = createAction('transactions/getQueryStatisticsError');

export const getTransactionCategoriesRequest = createAction('transactions/getTransactionCategoriesRequest');
export const getTransactionCategoriesSuccess = createAction('transactions/getTransactionCategoriesSuccess');
export const getTransactionCategoriesError = createAction('transactions/getTransactionCategoriesError');