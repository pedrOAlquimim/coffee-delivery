import { CreditCard, CurrencyDollar } from 'phosphor-react'
import { Form } from './components/Form'
import { PaymentButton } from './components/PaymentButton'
import {
  CheckoutContainer,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <Form />

        <div>
          <header>
            <span>
              <CurrencyDollar />
            </span>
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>

          <div>
            <PaymentButton
              icon={<CreditCard size={16} />}
              text="Cartao de Credito"
            />
          </div>
        </div>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </CheckoutContainer>
  )
}
