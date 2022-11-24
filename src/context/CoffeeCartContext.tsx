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
    const orderAlreadyExist = coffeesCart.find((item) => {
      item.id === coffee.id
    })

    const newOrder = coffeesCart.map((state) => {
      if (orderAlreadyExist) {
        return {
          ...state,
          quantity: state.quantity + coffee.quantity
        }
      } else {
        return state
      }
    })
    
    setCoffeesCart(newOrder) 
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
