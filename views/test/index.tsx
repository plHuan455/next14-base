"use client"

import { ButtonBase } from "@comp/atoms/button-base"

import { useAppDispatch } from "lib/redux/hooks"
import { authActions, useAuthValue } from "lib/redux/reducers/auth"

export default function ViewTest() {
  const dispatch = useAppDispatch()
  const auth = useAuthValue()
  return (
    <div>
      <ButtonBase
        size={40}
        onClick={() => {
          dispatch(authActions.updateState({ token: "new token", isLoading: false, isLogged: false }))
        }}
      >
        click me
      </ButtonBase>
      <div>{`auth: ${JSON.stringify(auth)}`}</div>
    </div>
  )
}
