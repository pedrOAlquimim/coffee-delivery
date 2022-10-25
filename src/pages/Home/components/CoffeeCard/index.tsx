import { ShoppingCart } from "phosphor-react";
import {
  CoffeeCardContainer,
  HeaderCardContainer,
  Tags,
  Title,
  PriceFooter,
  AmountAndCart,
  AmountButtonContainer,
} from "./styles";

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
  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={`../../../../assets/coffeesImages/${coffee.photo}`} />
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
          <span>R$</span>
          <span>9,90</span>
        </div>

        <AmountAndCart>

          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AmountAndCart>
      </PriceFooter>
    </CoffeeCardContainer>
  )
}