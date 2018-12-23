import { FETCH_ITEM } from '../constants/actionTypes';
import defaultList from '../API/CONTENTLISTINGPAGE-PAGE1';
const listReducer = (itemlist = defaultList, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return itemlist;
  }
  return itemlist;
};

export default listReducer;