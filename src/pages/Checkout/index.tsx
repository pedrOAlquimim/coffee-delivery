import { Form } from './components/Form'
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
        </div>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </CheckoutContainer>
  )
}
