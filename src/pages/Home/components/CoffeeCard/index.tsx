import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../uses/formatPrice'
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

interface CoffeesProps {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: CoffeesProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={`/src/assets/coffeesImages/${coffee.photo}`} />
        <Tags>
          {coffee.tags.map((tags) => (
            <span key={coffee.id}>{tags}</span>
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
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AmountAndCart>
      </PriceFooter>
    </CoffeeCardContainer>
  )
}
