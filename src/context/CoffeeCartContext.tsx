import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

export interface CartItems extends CoffeesProps {
  quantity: number
}

interface coffeeCartContextType {
  coffeesCart: CartItems[]
  addCoffeesToCart: (coffee: CartItems) => void
}

interface coffeeCartContextProviderProps {
  children: ReactNode
}

export const coffeeCartContext = createContext({} as coffeeCartContextType)

export function CoffeeCartContextProvider({ children }: coffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CartItems[]>([])

  const coffeesCartSize = coffeesCart.length

  function addCoffeesToCart(coffee: CartItems) {
    const orderAlreadyExist = coffeesCart.find((item) => {
      item.id === coffee.id
    })
  }


  return (
    <coffeeCartContext.Provider value={{
      coffeesCart,
      addCoffeesToCart
    }}>
      {children}
    </coffeeCartContext.Provider>
  )
}
