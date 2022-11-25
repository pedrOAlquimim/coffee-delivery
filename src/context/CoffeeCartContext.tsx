import { createContext, ReactNode, useState } from "react";
import { isHtmlElement } from "react-router-dom/dist/dom";
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
    const orderAlreadyExist = coffeesCart.findIndex((coffeeCart) => {
      coffeeCart.id === coffee.id
    })
    
    setCoffeesCart(state => state.map((item) => {
        if (orderAlreadyExist < 0) {
          return coffee
        } else {
          return {
            ...item,
            quantity: item.quantity + coffee.quantity
          }
        }
      }),
    )
    // setCoffeesCart([...coffeesCart, coffee])
  }
  console.log(coffeesCart)


  return (
    <CoffeeCartContext.Provider value={{
      coffeesCart,
      addCoffeesToCart,
    }}>
      {children}
    </CoffeeCartContext.Provider>
  )
}
