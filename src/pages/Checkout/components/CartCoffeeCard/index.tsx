import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CartItems } from '../../../../context/CoffeeCartContext'
import {
  CartCoffeeCardContainer,
  CartCoffeeCardOptions,
  CartCoffeeCardOptionsButtons,
  Buttons,
  RemoveButton,
  CartCoffeeCardPrice
} from './styles'

interface CartCoffeeCardProps {
  coffee: CartItems
}

export function CartCoffeeCard({coffee}: CartCoffeeCardProps) {
  return (
    <CartCoffeeCardContainer>
      <CartCoffeeCardOptions>
        <img src={`/src/assets/coffeesImages/${coffee.photo}`} />

        <CartCoffeeCardOptionsButtons>
          <h3>{coffee.name}</h3>

          <Buttons>
            <QuantityInput
              paddingSize='small'
            />
            <RemoveButton>
              <span>
                <Trash size={16} />
              </span>
              Remover
            </RemoveButton>
          </Buttons>
        </CartCoffeeCardOptionsButtons>
      </CartCoffeeCardOptions>

      <CartCoffeeCardPrice>R$ {coffee.price}</CartCoffeeCardPrice>
    </CartCoffeeCardContainer>
  )
}