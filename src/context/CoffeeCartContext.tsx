import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

interface CoffeeCartContextType {
  coffeesCart: CoffeesProps[]
  addCoffeesToCart: (coffee: CoffeesProps) => void
}

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartContextProvider({ children }: CoffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeesProps[]>([])

  function addCoffeesToCart(coffee: CoffeesProps) {
    const orderAlreadyExist = coffeesCart.findIndex((item) => {
      item.id === coffee.id
    })
    
    setCoffeesCart((state) => 
      state.map((item) => {
        if(orderAlreadyExist < 0) {
          return {
            ...item,
            quantity: item.quantity + coffee.quantity
          }
        } else {
          return coffee
        }
      })
    )
  }


  return (
    <CoffeeCartContext.Provider value={{
      coffeesCart,
      addCoffeesToCart,
    }}>
      {children}
    </CoffeeCartContext.Provider>
  )
}
