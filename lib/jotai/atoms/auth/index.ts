import { atom } from "jotai"

import { IShop } from "services/api/shop/types"

interface IAuthState {
  shop?: IShop
  token?: string
  isLogged: boolean
  isLoading: boolean
}

export const getAuthInitialState = (token?: string): IAuthState => ({
  token,
  isLogged: Boolean(token),
  isLoading: Boolean(token),
})
export const authAtom = atom<IAuthState>({
  shop: undefined,
  token: undefined,
  isLogged: false,
  isLoading: false,
})
