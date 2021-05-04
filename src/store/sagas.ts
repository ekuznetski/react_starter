import { ENotificationType } from "@domain";
import { call, put, takeEvery } from "redux-saga/effects";
import { Requests } from "../services/api.service";
import { ActionCreators } from "./actions";
import { EActionTypes } from "./store.enum";
import { IAction } from "./store.interface";

function* middlewareWrapper(
  actionType: EActionTypes,
  success_transform_response_fn: any
  // pathToStore?: string | null
) {
  yield takeEvery(actionType, function* (action?: IAction) {
    const { force, onSuccess, onFailure } = action || {};
    try {
      const response: any = yield success_transform_response_fn(action);
      if (onSuccess) {
        yield call(onSuccess, response);
      }
    } catch (e) {
      console.error(e);
      yield put(
        ActionCreators.showNotification({
          type: ENotificationType.failure,
          message: "Server error, please contact administrator...",
        })
      );
    }
  });
}

export function* fetchRatesSaga() {
  yield middlewareWrapper(EActionTypes.fetchRates, function* () {
    const { base, rates } = yield call(Requests[EActionTypes.fetchRates]);
    const preparedRates = {
      [base]: rates,
    };
    yield put(ActionCreators.saveRates(preparedRates));
    return preparedRates;
  });
}
