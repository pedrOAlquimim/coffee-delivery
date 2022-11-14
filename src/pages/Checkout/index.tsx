import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { AddressForm } from './components/AddressForm'
import { CartCoffeeCard } from './components/CartCoffeeCard'
import { PaymentButton } from './components/PaymentButton'
import {
  CheckoutContainer,
  Container,
  Title,
  PaymentForm,
  PaymentFormHeader,
  PaymentFormButtons,
  SelectedCoffeesContainer,
  ConfirmOrderButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Container>
        <Title>Complete seu pedido</Title>
        <AddressForm />

        <PaymentForm>
          <PaymentFormHeader>
            <span>
              <CurrencyDollar />
            </span>
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </PaymentFormHeader>

          <PaymentFormButtons>
            <PaymentButton
              icon={<CreditCard size={16} />}
              text="Cartão de Crédito"
            />
            <PaymentButton
              icon={<Bank size={16} />}
              text="Cartão de Débito"
            />
            <PaymentButton
              icon={<Money size={16} />}
              text="Dinheiro"
            />
          </PaymentFormButtons>
        </PaymentForm>
      </Container>

      <Container>
        <Title>Cafés selecionados</Title>

        <SelectedCoffeesContainer>
          <CartCoffeeCard />

          <div>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>

          <ConfirmOrderButton>
            Confirmar Pedido
          </ConfirmOrderButton>
        </SelectedCoffeesContainer>
      </Container>
    </CheckoutContainer>
  )
}
