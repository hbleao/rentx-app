import { 
  getOfflineUser,
  deleteOfflineUser,
  getAuthorization,
  registerOfflineUser,
  updateOfflineUser
} from "../../../services";

import { login, logout, update } from ".";

import { AppDispatch } from "../../types";
import { UserProps } from "../../../dtos/AuthDTO";
import { AsyncLoginProps } from "./types";

export function asyncOfflineLogin() {
  return async function (dispatch: AppDispatch) {
    const offlineUser = await getOfflineUser();
    if(!offlineUser) return;
    await dispatch(login(offlineUser));
  }
}

export function asyncLogin({ email, password }: AsyncLoginProps) {
  return async function (dispatch: AppDispatch) {
    const user = await getAuthorization({ email, password });
    await registerOfflineUser(user);
    dispatch(login(user));
  }
}

export function asyncLogout(user: UserProps) {
  return async function (dispatch: AppDispatch) {
    await deleteOfflineUser(user.id);
    dispatch(logout());
  }
}

export function asyncUpdateUser(user: UserProps) {
  return async function (dispatch: AppDispatch) {
    await updateOfflineUser(user);
    dispatch(update(user));
  }
}
