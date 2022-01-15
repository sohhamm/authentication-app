export interface IAuthForm {
  title: string
  subTitle?: string
  ctaText: JSX.Element
  buttonText: string
}

export type TFetcher = (
  url: string,
  method?: string,
  payload?: any,
) => Promise<any>
