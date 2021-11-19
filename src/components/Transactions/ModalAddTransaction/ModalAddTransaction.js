import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { closeModalTransaction } from '../../../redux/transactions/transactions-actions';
// import TransactionAddForm from '../TransactionAddForm';
import Modal from '../Modal';
import './ModalAddTransaction.css';

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  return (
    <Modal onClose={onClose}>
      <button
        type="button"
        className="close-modal__button"
        onClick={onClose}
      >
        999
      </button>
      {/* <TransactionAddForm /> */}
    </Modal>
  );
}