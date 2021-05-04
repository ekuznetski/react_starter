import { EActionTypes } from "./store.enum";
import { IAction, IDataStore } from "./store.interface";

export const initDataStore: IDataStore = {
  rates: null,
};

export function dataStoreReducer(
  state = initDataStore as IDataStore,
  action: IAction
): IDataStore {
  switch (action.type) {
    case EActionTypes.saveRates:
      return { ...state, rates: action.payload };
    default:
      return state;
  }
}
