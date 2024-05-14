import { IShop } from "services/api/shop/types"

export interface IAuthStateValue {
  shop?: IShop
  token?: string
  isLogged: boolean
  isLoading: boolean
}
