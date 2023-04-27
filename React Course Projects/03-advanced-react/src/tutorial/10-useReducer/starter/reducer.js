import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...action, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...action, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...action, people: newPeople };
  }
  throw new Error(`No matching ${action.type} - actipon type`);
};

export default reducer;
