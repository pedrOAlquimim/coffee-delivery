import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import traditional from '../../../../assets/coffeesImages/tradicional.png'
import {
  CartCoffeeCardContainer,
  CartCoffeeCardOptions,
  CartCoffeeCardOptionsButtons,
  Buttons,
  RemoveButton,
  CartCoffeeCardPrice
} from './styles'

export function CartCoffeeCard() {
  return (
    <CartCoffeeCardContainer>
      <CartCoffeeCardOptions>
        <img src={traditional} />

        <CartCoffeeCardOptionsButtons>
          <h3>Expresso Tradicional</h3>

          <Buttons>
            <QuantityInput paddingSize='small' />
            <RemoveButton>
              <span>
                <Trash size={16} />
              </span>
              Remover
            </RemoveButton>
          </Buttons>
        </CartCoffeeCardOptionsButtons>
      </CartCoffeeCardOptions>

      <CartCoffeeCardPrice>R$ 10,90</CartCoffeeCardPrice>
    </CartCoffeeCardContainer>
  )
}