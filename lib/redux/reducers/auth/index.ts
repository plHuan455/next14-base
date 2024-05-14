import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getCookie, setCookie } from "cookies-next"

import { useAppSelector } from "lib/redux/hooks"
import { RootState } from "lib/redux/store"
import { STORAGE_TOKEN_NAME } from "services/storage/constants"

import { IAuthStateValue } from "./types"

export const getAuthInitialState = (token?: string): IAuthStateValue => {
  return {
    isLoading: Boolean(token),
    isLogged: Boolean(token),
    token: token,
  }
}

const initialState: IAuthStateValue = getAuthInitialState(getCookie(STORAGE_TOKEN_NAME))
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateState: (state, { payload }: PayloadAction<IAuthStateValue>) => {
      const cloneState = { ...state, ...payload }
      setCookie(STORAGE_TOKEN_NAME, cloneState.token)
      return cloneState
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer

export const selectAuth = (state: RootState) => state.auth

export const useAuthValue = () => {
  const auth = useAppSelector(selectAuth)
  return auth
}
