import { IAction, IAppStore } from "./store.interface";

export const initAppStore: IAppStore = {
  modal: null,
  notification: {
    isVisible: false,
    type: null,
    timeout: null,
    message: null,
  },
};

export function appStoreReducer(
  state = initAppStore as IAppStore,
  action: IAction
): IAppStore {
  switch (action.type) {
    default:
      return state;
  }
}
