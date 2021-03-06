import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import Select from 'react-select';
import Switch from 'react-switch';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru';
import customStyles from './SelectStyle';
import 'react-datetime/css/react-datetime.css';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../../redux/transactions';
import './TransactionAddForm.css';
import { closeModalTransaction } from 'redux/transactions/transactions-actions';
import { getAllTransactions } from 'redux/reducers/statistic/statisticReducer.js';
import { fetchBalance } from 'redux/balance/balanceOperations';
import { successRequest, invalidRequest } from 'services/pnotify/notifications';

export default function TransactionAddForm() {
  const dispatch = useDispatch();

  const transactionCategories = useSelector(
    transactionsSelectors.getTransactionCategories,
  );

  const transactionCategoriesIncome = [
    { regularIncome: 'Регулярный доход' },
    { irregularIncome: 'Нерегулярный доход' },
  ];

  const onClose = () => {
    dispatch(closeModalTransaction());
    document.body.style.overflow = 'unset';
  };

  const [fullState, setFullState] = useState({
    checked: false,
    type: '',
    amount: '',
    comment: '',
    category: '',
    date: Date.now(),
  });

  const { checked, amount, comment, category, date } = fullState;

  let optionSelect;
  !fullState.checked
    ? (optionSelect = transactionCategoriesIncome.map(e => {
        return {
          value: Object.keys(e)[0],
          label: Object.values(e)[0],
        };
      }))
    : (optionSelect = transactionCategories.map(e => {
        return {
          value: Object.keys(e)[0],
          label: Object.values(e)[0],
        };
      }));

  useEffect(() => {
    if (checked) {
      setFullState(prev => ({
        ...prev,
      }));
      return;
    }

    setFullState(prev => ({
      ...prev,
    }));
  }, [checked]);

  const handleChangeCheckbox = nextChecked => {
    setFullState(prev => ({
      ...prev,
      checked: nextChecked,
      value: null,
      label: '',
    }));
  };

  const inputProps = {
    className: 'input date__input',
  };

  const onChangeSelect = e => {
    setFullState(prev => ({
      ...prev,
      category: e.value,
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFullState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeDate = e => {
    setFullState(prev => ({
      ...prev,
      date: e._d.getTime(),
    }));
  };

  let yesterday = moment().subtract(1, 'day');

  let valid = function (current) {
    return current.isAfter(yesterday);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validSum = Number(amount).toFixed(2);

    if (amount === '' || category === '') {
      return invalidRequest('Заполните все поля!');
    }

    (async () => {
      await dispatch(
        transactionsOperations.addTransaction({
          amount: Number(validSum),
          comment: comment === '' ? ' ' : comment,
          type: !checked ? 'increment' : 'decrement',
          category,
          date,
        }),
      );

      dispatch(getAllTransactions());
      dispatch(fetchBalance());
      successRequest('Транзакция успешно добавлена!');
    })();

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <button
        type="button"
        className="TransactionAddForm__closeBtn"
        onClick={onClose}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L17 17" stroke="black" />
          <path d="M1 17L17 0.999999" stroke="black" />
        </svg>
      </button>

      <p className="TransactionAddForm__title">Добавить транзакцию</p>

      <form className="TransactionAddForm__form" onSubmit={handleSubmit}>
        <div className="checkbox__wrapper">
          <span className={`checkbox__span ${!checked && 'active-income'}`}>
            Доход
          </span>
          <Switch
            name="checked"
            value={checked}
            onChange={handleChangeCheckbox}
            checked={checked}
            className="Checkbox__button"
            height={40}
            width={80}
            handleDiameter={44}
            onHandleColor="#FF6596"
            offHandleColor="#24cca7"
            onColor="#fff"
            offColor="#fff"
            checkedHandleIcon={
              <svg
                className="add-transaction__icon"
                id="add-icon"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1L20 0.999999" stroke="white" strokeWidth="2" />
              </svg>
            }
            uncheckedHandleIcon={
              <svg
                className="switch-icon__spend"
                id="spend-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0V20" stroke="white" strokeWidth="2" />
                <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
              </svg>
            }
          />
          <span className={`Checkbox__span ${checked && 'active-spend'}`}>
            Расход
          </span>
        </div>

        {checked && (
          <div className="select__wrapper">
            <Select
              name="selectedOption"
              onChange={onChangeSelect}
              options={optionSelect}
              placeholder="Выберите категорию"
              styles={customStyles}
            />
            <svg
              className="select__icon"
              id="arrow-icon"
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L10 10L19 1" stroke="black" />
            </svg>
          </div>
        )}
        {!checked && (
          <div className="select__wrapper">
            <Select
              name="selectedOption"
              onChange={onChangeSelect}
              options={optionSelect}
              placeholder="Выберите категорию"
              styles={customStyles}
            />
            <svg
              className="select__icon"
              id="arrow-icon"
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L10 10L19 1" stroke="black" />
            </svg>
          </div>
        )}

        <div className="form__wrapper">
          <label className="form__sum">
            <input
              name="amount"
              value={amount}
              onChange={handleChange}
              type="text"
              maxLength="6"
              className="input sum__input"
              placeholder="0.00"
              pattern="^[0-9]+$"
              required
            ></input>
          </label>

          <Datetime
            className="date__wrapper"
            locale="ru"
            name="date"
            initialValue={moment()}
            onChange={handleChangeDate}
            closeOnSelect={true}
            timeFormat={false}
            inputProps={inputProps}
            isValidDate={valid}
            required
          />
          <svg
            className="date__icon"
            id="calendar-icon"
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4_1061)">
              <path
                d="M10 11H8V13H10V11ZM14 11H12V13H14V11ZM18 11H16V13H18V11ZM20 4H19V2H17V4H9V2H7V4H6C4.89 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 6 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H6V9H20V20Z"
                fill="#4A56E2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4_1061"
                x="-3"
                y="0"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_1061"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_1061"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <label className="form__text">
          <input
            name="comment"
            value={comment}
            type="text"
            onChange={handleChange}
            className="input text__input"
            placeholder="Комментарий"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїҐґ ])?[a-zA-Zа-яА-ЯІіЇїҐґ]*)*$"
          ></input>
        </label>

        <button type="submit" className="TransactionAddForm__addBtn">
          ДОБАВИТЬ
        </button>
        <button
          type="submit"
          className="TransactionAddForm__cancelBtn"
          onClick={onClose}
        >
          ОТМЕНА
        </button>
      </form>
    </Modal>
  );
}
