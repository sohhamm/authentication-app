export type ComparePasswordFn = (
  password: string,
  hash: string,
) => Promise<boolean>

export type HashPasswordFn = (password: string) => Promise<string>

export type CreateJWTFn = (email: string) => Promise<string>
