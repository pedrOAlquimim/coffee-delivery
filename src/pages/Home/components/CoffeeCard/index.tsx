import { ShoppingCart } from "phosphor-react";
import coffee from '../../../../assets/coffee.svg'
import {
  CoffeeCardContainer,
  HeaderCardContainer,
  Tags,
  Title,
  PriceFooter,
  AmountAndCart,
  AmountButtonContainer,
  LessButton,
  PlusButton
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={coffee} />
        <Tags>
          <span>tradicional</span>
          <span>tradicional</span>
        </Tags>
      </HeaderCardContainer>

      <Title>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Title>

      <PriceFooter>
        <div>
          <span>R$</span>
          <span>9,90</span>
        </div>

        <AmountAndCart>
          <AmountButtonContainer>
            <LessButton>-</LessButton>
            <span>1</span>
            <PlusButton>+</PlusButton>
          </AmountButtonContainer>

          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AmountAndCart>
      </PriceFooter>
    </CoffeeCardContainer>
  )
}