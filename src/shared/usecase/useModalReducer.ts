import { useReducer } from 'react';

type TModalType = string;

export interface IModalDefinition {
  title: string;
  element: JSX.Element;
}

type TModalState = {
  isOpen: boolean;
} & (
  | {
      isOpen: true;
      type: string;
      id?: string | number;
    }
  | {
      isOpen: false;
    }
);

const initialState: TModalState = {
  isOpen: false,
};

export type TModalReducerReturn = {
  modalState: TModalState;
  openModal: (modalType: TModalType, id?: string | number) => void;
  closeModal: () => void;
};

type TModalAction =
  | { type: 'OPEN_MODAL'; modalType: TModalType; id?: string | number }
  | { type: 'CLOSE_MODAL' };

function modalReducer(state: TModalState, action: TModalAction): TModalState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true,
        type: action.modalType,
        id: action.id, // optional
      };
    case 'CLOSE_MODAL':
      return { isOpen: false };
    default:
      return state;
  }
}

export default function useModalReducer(): TModalReducerReturn {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (modalType: TModalType, id?: string | number) => {
    dispatch({ type: 'OPEN_MODAL', modalType, id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return { openModal, closeModal, modalState };
}
