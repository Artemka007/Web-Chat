export const baseURI = "http://127.0.0.1:8000/api/1.0/"

export interface IResponse {
  readonly result: boolean
  readonly message: string
  readonly errors: object | undefined
}

export interface ILoginUser {
  readonly username: string
  readonly password: string
}

export interface IRegisterUser {
  readonly username: string
  readonly email: string
  readonly first_name: string
  readonly last_name: string
  readonly password1: string
  readonly password2: string
}
