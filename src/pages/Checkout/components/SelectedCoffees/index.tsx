import { useContext } from 'react'
import { CoffeeCartContext } from '../../../../context/CoffeeCartContext'
import { CartCoffeeCard } from '../CartCoffeeCard'
import {
  SelectedCoffeesContainer,
  PriceContainer,
  PriceTotal,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  const {coffeesCart} = useContext(CoffeeCartContext)
  console.log(coffeesCart)
  return (
    <SelectedCoffeesContainer>

      {
        coffeesCart.map((item) => (
          <CartCoffeeCard key={item.id} coffee={item} />
        ))
      }

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