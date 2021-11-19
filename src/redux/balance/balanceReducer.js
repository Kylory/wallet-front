import { createReducer } from '@reduxjs/toolkit';

import { fetchBalance } from './balanceOperations';

export const balanceReducer = createReducer(0, {
  [fetchBalance.fulfilled]: (state, action) => action.payload,
});
