import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

export interface CartItems extends CoffeesProps {
  quantity: number
}

interface coffeeCartContextType {
  coffeesCart: CartItems[]
}

interface coffeeCartContextProviderProps {
  children: ReactNode
}

export const coffeeCartContext = createContext({} as coffeeCartContextType)

export function CoffeeCartContextProvider({ children }: coffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CartItems[]>([])

  function addCoffeesToCart(coffee: CartItems) {

  }

  return (
    <coffeeCartContext.Provider value={{coffeesCart}}>
      {children}
    </coffeeCartContext.Provider>
  )
}