import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import Modal from "../Modal";
import { closeModalTransaction } from "../../../redux/transactions/transactions-actions";
import './TransactionAddForm.css';


export default function TransactionAddForm() {
    const dispatch = useDispatch();
    const onClose = useCallback(() => {
        return dispatch(closeModalTransaction());
    }, [dispatch]);

    const [optionSelect, setOptionSelect] = useState({
        value: null,
        label: ''
    });

    const [fullState, setFullState] = useState({
        type: 'income',
        sum: '',
        date: moment().format('DD.MM.YYYY'),
        coment: ''
    });

    const { type, sum, date, comment } = fullState;
    const { value } = optionSelect;

    const handleChange = e => {
    const { name, value } = e.target;

    setFullState(prev => ({
        ...prev,
        [name]: value,
    }));
    };

    let yesterday = moment().subtract( 1, 'day' );
    let valid = function( current ){
        return current.isAfter( yesterday );
    };
    
    const handleChangeDate = e => {
    typeof e === 'string'
        ? setFullState(prev => ({
            ...prev,
            date: e,
        }))
        : setFullState(prev => ({
            ...prev,
            date: e.format('DD.MM.YYYY'),
        }));
    };

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            const validSum = Number(sum).toFixed(2);
            dispatch(
                addTransaction({
                    date,
                    month: date.slice(3, 5),
                    year: date.slice(6),
                    validSum,
                    comment,
                    type,
                    category: value,
                }),
            );
            onClose();
        },
        [type, comment, date, value, sum, onClose, dispatch]
    );

    return (
        <Modal onClose={onClose}>
            <button type="button" className="TransactionAddForm__closeBtn" onClick={onClose}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 17" stroke="black"/>
                    <path d="M1 17L17 0.999999" stroke="black"/>
                </svg>
            </button>

            <p className="TransactionAddForm__title">Добавить транзакцию</p>

            <form onSubmit={handleSubmit}>
                <div className="TransactionAddForm__radio">
                        <label className="TransactionAddForm__text">Доход
                        <input
                        type="radio"
                        name="type"
                        // checked={type === "income"}
                        value="income"
                        onChange={handleChange}
                    />
                    </label>

                    <label className="TransactionAddForm__text">
                        <input
                        type="radio"
                        // checked={type === "expense"}
                        name="type"
                        value="expense"
                        onChange={handleChange}
                    />Расход
                    </label>
                    </div>

                    <Select
                    name="optionSelect"
                    onChange={setOptionSelect}
                    options={optionSelect}
                    placeholder="Выберите категорию"
                    />

                    <div>
                        <label htmlFor="">
                            <input
                                className="TransactionAddForm__input"
                            type='number'
                            name="sum"
                            value={sum}
                            onChange={handleChange}
                            placeholder="0.00"
                            required
                        />
                        </label>

                    <Datatime
                        locale="ru"
                        initialValue={moment()}
                        closeOnSelect={true}
                        timeFormat={false}
                        isValidDate={valid}
                        onChange={handleChangeDate}
                    />
                    </div>

                    <label>
                        <input
                            className="TransactionAddForm__input"
                            type='text'
                            name="comment"
                            value={comment}
                            onChange={handleChange}
                            placeholder="Комментарий"
                            required
                        />
                    </label>
                    
                    <button type="submit" className="TransactionAddForm__addBtn">ДОБАВИТЬ</button>
                    <button type="submit" className="TransactionAddForm__cancelBtn" onClick={onClose}>ОТМЕНА</button>


            </form>
        </Modal>
    )
}