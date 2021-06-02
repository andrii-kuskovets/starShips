export interface IShips {
    name: string
    model: string
    starship_class: string
    hyperdrive_rating:string
    passengers: string
    manufacturer:string
}
export interface ISwapi {
  count: number
  next: string | null
  previous: string | null
  results: Array<IShips>
}
