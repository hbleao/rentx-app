import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationDTO } from "../../../dtos/AuthDTO";

import { RootState } from "../../types";

export const authorizationSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    token: ''
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      state.user = {
        ...user
      }
    },
    logout: (state) => {
      state.user = undefined;
      state.token = ''; 
    },
    update: (state, action) => {
      const newUser = action.payload;
      state.user = {
        ...newUser
      }
    }
  }
});

const selectAuth = (state: RootState): AuthorizationDTO => state.auth;

const { login, logout, update } = authorizationSlice.actions;

export {
  login, 
  logout,
  update,
  selectAuth,
}
