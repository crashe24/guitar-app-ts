export type GuitarStructure  = {
    id:number
    name:string
    image:string
    description:string
    price:number
  
  }

  export type Guitar2IdStructure = Pick<GuitarStructure, 'id'>
  export type GuitarIdStructure = GuitarStructure['id']

  export type CartItemStructure  = GuitarStructure & {
    quantity: number
  
  }

  export interface CartItemInterace extends GuitarStructure {
    quantity: number
  }

  export type CartItemPick = Pick<GuitarStructure, 'id' | 'name'> 

  export type CartItemPickTwo = Pick<GuitarStructure, 'id' | 'name'> &{
    quantity: number
  }
  
  export type CartItemOmit = Omit<GuitarStructure, 'id' | 'name'> &{
    quantity: number
  }
  
 