import { AnyFunction, INotificationState, IModalState } from "@domain";
import { EActionTypes } from "./store.enum";

export interface IDataStore {
  rates: any;
}

export interface IAppStore {
  modal: IModalState;
  notification: INotificationState;
}

export interface IStore {
  data: IDataStore;
  app: IAppStore;
}

export interface IAction<T = any> {
  type: EActionTypes;
  force?: true | null;
  payload?: T;
  onSuccess?: AnyFunction;
  onFailure?: AnyFunction;
}
