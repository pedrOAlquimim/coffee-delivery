import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

interface coffeeCartContextType {
  coffeesCart: CoffeesProps[]
  addCoffeesToCart: (coffee: CoffeesProps) => void
}

interface coffeeCartContextProviderProps {
  children: ReactNode
}

export const coffeeCartContext = createContext({} as coffeeCartContextType)

export function CoffeeCartContextProvider({ children }: coffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeesProps[]>([])

  const coffeesCartSize = coffeesCart.length

  function addCoffeesToCart(coffee: CoffeesProps) {
    const orderAlreadyExist = coffeesCart.find((item) => {
      item.id === coffee.id
    })

    const newOrder = () => {
      
    }
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
