import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from 'redux/balance/balanceOperations';
import { getBalance } from 'redux/balance/balanceSelectors';
import { Wrapper, Text, Summ } from './styledComp';
import moneyService from 'services/moneyService/moneyService';

const Balance = () => {
  const balanceSumm = useSelector(getBalance);
  const fixedBalanceSumm = moneyService(balanceSumm);
  // console.log('balanceSumm', fixedBalanceSumm);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Text>ВАШ БАЛАНС</Text>
        {balanceSumm ? (
          <div>
            <Summ>₴ {fixedBalanceSumm}</Summ>
          </div>
        ) : (
          <Text>Нет данных</Text>
        )}
      </Wrapper>
    </>
  );
};

export default Balance;
