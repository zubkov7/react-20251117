import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  address: "",
};

const UPDATE_NAME_ACTION = "UPDATE_NAME_ACTION";
const UPDATE_TEXT_ACTION = "UPDATE_TEXT_ACTION";
const UPDATE_ADDRESS_ACTION = "UPDATE_ADDRESS_ACTION";
const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME_ACTION:
      return { ...INITIAL_FORM, name: payload };
    case UPDATE_ADDRESS_ACTION:
      return { ...state, address: payload };
    case UPDATE_TEXT_ACTION:
      return { ...state, text: payload };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, address, text } = form;

  return {
    name,
    address,
    text,
    dispatch,
  };
};
