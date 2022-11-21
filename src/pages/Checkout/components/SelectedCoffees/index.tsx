import { useContext } from 'react'
import { coffeeCartContext } from '../../../../context/CoffeeCartContext'
import { CartCoffeeCard } from '../CartCoffeeCard'
import {
  SelectedCoffeesContainer,
  PriceContainer,
  PriceTotal,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  const {coffeesCart} = useContext(coffeeCartContext)


  return (
    <SelectedCoffeesContainer>

      {coffeesCart?.map((coffee) => (
        <CartCoffeeCard key={coffee.id} coffee={coffee} />
      ))}

      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <PriceTotal>Total</PriceTotal>
          <PriceTotal>R$ 33,20</PriceTotal>
        </div>
      </PriceContainer>

      <ConfirmOrderButton>
        Confirmar Pedido
      </ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}