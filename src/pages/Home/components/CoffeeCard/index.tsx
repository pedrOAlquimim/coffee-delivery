import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../uses/formatPrice'
import { QuantityInput } from '../.././../../components/QuantityInput'
import { CoffeeCartContext } from '../../../../context/CoffeeCartContext'
import {
  CoffeeCardContainer,
  HeaderCardContainer,
  Tags,
  Title,
  PriceFooter,
  RegularText,
  Price,
  AmountAndCart,
} from './styles'

export interface CoffeesProps {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
  quantity: number
}

interface CoffeeCardProps {
  coffee: CoffeesProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeesToCart } = useContext(CoffeeCartContext)

  const [ quantity, setQuantity ] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    const addNewCoffeeToCart = { ...coffee, quantity, }
    addCoffeesToCart(addNewCoffeeToCart)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={`/coffeesImages/${coffee.photo}`} alt='' />
        <Tags>
          {coffee.tags.map((tags) => (
            <span key={tags}>{tags}</span>
          ))}
        </Tags>
      </HeaderCardContainer>

      <Title>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </Title>

      <PriceFooter>
        <div>
          <RegularText>R$</RegularText>
          <Price>{formattedPrice}</Price>
        </div>

        <AmountAndCart>
          <QuantityInput 
            paddingSize='medium'
            quantity={quantity}
            onDrecrease={handleDecreaseQuantity}
            onIncrease={handleIncreaseQuantity}
          />

          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AmountAndCart>
      </PriceFooter>
    </CoffeeCardContainer>
  )
}