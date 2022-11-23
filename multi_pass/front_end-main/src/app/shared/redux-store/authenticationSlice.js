import { setToken } from "./../../shared/services/tokenServices";
// import { removeToken } from "./../../shared/services/tokenServices";
import { isAuthenticated } from "../../shared/services/accountServices";
import { createSlice } from "@reduxjs/toolkit";
import { URL_HOME } from "./../constants/urls/urlConstants";

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
const initialState = {
  isLogged: isAuthenticated(),
};

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      setToken(action.payload);
      state.isLogged = true;
    },
    signOut: (state, props) => {
      localStorage.clear();
      sessionStorage.clear();
      // removeToken();
      state.isLogged = false;
      window.location.replace(URL_HOME);
    },
  },
});

export const { signIn, signOut } = authenticationSlice.actions;

export const selectIsLogged = (state) => state.auth.isLogged;

export default authenticationSlice.reducer;
