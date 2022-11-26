import { useContext } from 'react'
import { CoffeeCartContext } from '../../../../context/CoffeeCartContext'
import { formatMoney } from '../../../../uses/formatPrice'
import { CartCoffeeCard } from '../CartCoffeeCard'
import {
  SelectedCoffeesContainer,
  PriceContainer,
  PriceTotal,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  const { 
    coffeesCart,
    orderPrice,
  } = useContext(CoffeeCartContext)

  const totalOrderPrice = orderPrice + 3.50
  const formattedOrderPrice = formatMoney(orderPrice)
  const formattedTotalOrderPrice = formatMoney(totalOrderPrice)

  return (
    <SelectedCoffeesContainer>
      {coffeesCart.map((item) => (
          <CartCoffeeCard key={item.id} coffee={item} />
        ))
      }

      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ {formattedOrderPrice}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <PriceTotal>Total</PriceTotal>
          <PriceTotal>R$ {formattedTotalOrderPrice}</PriceTotal>
        </div>
      </PriceContainer>

      <ConfirmOrderButton>
        Confirmar Pedido
      </ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}