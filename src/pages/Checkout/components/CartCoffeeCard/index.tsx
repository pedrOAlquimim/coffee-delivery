import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CoffeesProps } from '../../../Home/components/CoffeeCard'
import {
  CartCoffeeCardContainer,
  CartCoffeeCardOptions,
  CartCoffeeCardOptionsButtons,
  Buttons,
  RemoveButton,
  CartCoffeeCardPrice
} from './styles'

interface CartCoffeeCardProps {
  coffee: CoffeesProps
}

export function CartCoffeeCard({ coffee }: CartCoffeeCardProps) {
  return (
    <CartCoffeeCardContainer>
      <CartCoffeeCardOptions>
        <img src={`/src/assets/coffeesImages/${coffee.photo}`} />

        <CartCoffeeCardOptionsButtons>
          <h3>{coffee.name}</h3>

          <Buttons>
            <QuantityInput
              paddingSize='small'
              quantity={coffee.quantity}
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