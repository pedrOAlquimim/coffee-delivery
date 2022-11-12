import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Form } from './components/Form'
import { PaymentButton } from './components/PaymentButton'
import {
  CheckoutContainer,
  Title,
  PaymentForm,
  PaymentFormHeader,
  PaymentFormButtons,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <Form />

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
      </div>

      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </CheckoutContainer>
  )
}
