import { MutableRefObject } from "react"

export const doAsyncTimeout = ({
  ref,
  delay,
  onFinish,
  onReject,
  onResolve,
}: {
  ref: MutableRefObject<NodeJS.Timeout>
  delay: number
  onFinish?(): void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onReject?(reject: (reason: any) => void): unknown
  onResolve?(resolve: (value: unknown) => void): unknown
}) => {
  return new Promise((executor) => {
    ref.current = setTimeout(() => {
      onFinish?.()
      if (typeof onReject === "function") {
        onReject(executor)
      }
      if (typeof onResolve === "function") {
        onResolve(executor)
      }
    }, delay)
  })
}

export interface AsyncErrorData {
  code: string
  message: string
}

export class AsyncError {
  code: string
  message: string
  constructor({ code, message }: { code: string; message: string }) {
    this.code = code
    this.message = message
  }
}

export async function asyncWithTryCatch<T, K>({
  asyncTask,
  errorTransform,
}: {
  asyncTask: () => Promise<T>
  errorTransform?: (error: Error) => K
}) {
  let result: T
  let error: K | boolean

  try {
    result = await asyncTask()
    error = undefined
  } catch (err) {
    result = undefined
    error = errorTransform?.(err) || true
  }

  return { result, error }
}

export async function sleep(ms: number) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}
