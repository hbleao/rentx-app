import { getOfflineUser } from "../../../services";

import { login } from ".";

import { AppDispatch, AppThunk } from "../../types";

export function asyncLogin(): AppThunk {
  return async function (dispatch: AppDispatch) {
    const offlineUser = await getOfflineUser();

    dispatch(login(offlineUser));
  }
}
