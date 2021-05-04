import { IModalState, INotificationState } from "@domain";
import { EActionTypes } from "./store.enum";
import { IAction } from "./store.interface";

export const ActionCreators = {
  showNotification(
    payload: Omit<INotificationState, "isVisible">
  ): IAction<Omit<INotificationState, "isVisible">> {
    return {
      type: EActionTypes.showNotification,
      payload,
    };
  },

  hideNotification(): IAction {
    return {
      type: EActionTypes.hideNotification,
    };
  },

  showModal(
    payload: Omit<IModalState, "isVisible">
  ): IAction<Omit<IModalState, "isVisible">> {
    return {
      type: EActionTypes.showModal,
      payload,
    };
  },

  hideModal(): IAction {
    return {
      type: EActionTypes.hideModal,
    };
  },

  fetchRates(payload: any): IAction<any> {
    return {
      type: EActionTypes.fetchRates,
      payload,
    };
  },

  saveRates(payload: any) {
    return {
      type: EActionTypes.saveRates,
      payload,
    };
  },
};
