import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationDTO } from "../../../dtos/AuthDTO";

import { RootState } from "../../types";

export const authorizationSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;

      state.user = {
        ...user
      }
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

const selectAuth = (state: RootState): AuthorizationDTO => state.auth;

const { login, logout } = authorizationSlice.actions;

export {
  login, 
  logout,
  selectAuth,
}
