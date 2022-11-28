import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../pages/Home/components/CoffeeCard";

interface CoffeeCartContextType {
  coffeesCart: CoffeesProps[]
  orderPrice: number
  cartQuantity: number
  addCoffeesToCart: (coffee: CoffeesProps) => void
  removeCoffeFromCart:(id: string) => void
  increaseCoffeeQuantity:(id: string) => void
  decreaseCoffeeQuantity:(id: string) => void
}

interface CoffeeCartContextProviderProps {
  children: ReactNode
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export function CoffeeCartContextProvider({ children }: CoffeeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeesProps[]>([])

  const cartQuantity = coffeesCart.length

  const orderPrice = coffeesCart.reduce((total, coffee) => {
    return total + coffee.price * coffee.quantity
  }, 0)

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

  function increaseCoffeeQuantity(id: string) {
    setCoffeesCart((state) => state.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      } else {
        return item
      }
    }))
  }

  function decreaseCoffeeQuantity(id: string) {
    setCoffeesCart((state) => state.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      } else {
        return item
      }
    }))
  }
  console.log(coffeesCart)


  return (
    <CoffeeCartContext.Provider value={{
      coffeesCart,
      addCoffeesToCart,
      removeCoffeFromCart,
      increaseCoffeeQuantity,
      decreaseCoffeeQuantity,
      orderPrice,
      cartQuantity
    }}>
      {children}
    </CoffeeCartContext.Provider>
  )
}
