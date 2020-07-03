import SHOP_DATA from "./shop.data";

import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};
