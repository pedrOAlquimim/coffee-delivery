import { useContext } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CoffeesProps } from '../../../Home/components/CoffeeCard'
import { formatMoney } from '../../../../uses/formatPrice'
import { CoffeeCartContext } from '../../../../context/CoffeeCartContext'
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
  const { removeCoffeFromCart } = useContext(CoffeeCartContext)

  function handleRemoveCoffeeFromCart() {
    removeCoffeFromCart(coffee.id)
  }

  const formattedPrice = formatMoney(coffee.price)

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
            <RemoveButton onClick={handleRemoveCoffeeFromCart}>
              <span>
                <Trash size={16} />
              </span>
              Remover
            </RemoveButton>
          </Buttons>
        </CartCoffeeCardOptionsButtons>
      </CartCoffeeCardOptions>

      <CartCoffeeCardPrice>R$ {formattedPrice}</CartCoffeeCardPrice>
    </CartCoffeeCardContainer>
  )
}