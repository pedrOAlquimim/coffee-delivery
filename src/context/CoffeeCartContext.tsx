import { createContext, ReactNode, useState } from "react";
import { isHtmlElement } from "react-router-dom/dist/dom";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

interface CoffeeCartContextType {
  coffeesCart: CoffeesProps[]
  addCoffeesToCart: (coffee: CoffeesProps) => void
  removeCoffeFromCart:(id: string) => void
}

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartContextProvider({ children }: CoffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeesProps[]>([])

  function addCoffeesToCart(coffee: CoffeesProps) {
    const orderAlreadyExist = coffeesCart.find((coffeeCart) => {
      return coffeeCart.id === coffee.id
    })
    
    if (!orderAlreadyExist) {
      setCoffeesCart((state) => [...state, coffee])
    
    } else {
      setCoffeesCart((state) => state.map((item) => {
        if(item.id === coffee.id) {
          return {
            ...item,
            quantity: item.quantity + coffee.quantity
          }
        } else {
          return item
        }
      }))
    }
  }

  function removeCoffeFromCart(id: string) {
    const cartWithoutDeletedOne = coffeesCart.filter((item) => {
      return item.id !== id
    })

    setCoffeesCart(cartWithoutDeletedOne)
  }


  return (
    <CoffeeCartContext.Provider value={{
      coffeesCart,
      addCoffeesToCart,
      removeCoffeFromCart
    }}>
      {children}
    </CoffeeCartContext.Provider>
  )
}
