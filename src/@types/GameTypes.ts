export interface GameTypesProps {
  type: string
  description: string
  range: number
  price: number
  'max-number': number
  color: string
  'min-cart-value': number
}

export interface GamesApiResponseProps {
  games: GameTypesProps[] | []
}
