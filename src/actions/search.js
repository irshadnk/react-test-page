
import { SEARCH_ITEM, FETCH_ITEM, CLEAR_SEARCH } from '../constants/actionTypes'
export const searchItem = (name) => ({
  type: SEARCH_ITEM, name
});

export const fetchItem = () => ({
  type: FETCH_ITEM
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});