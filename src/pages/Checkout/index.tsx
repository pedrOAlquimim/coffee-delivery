import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import {
  CheckoutContainer,
  Container,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Container>
        <Title>Complete seu pedido</Title>
        <AddressForm />

        <PaymentForm />
      </Container>

      <Container>
        <Title>Cafés selecionados</Title>
        <SelectedCoffees />
      </Container>
    </CheckoutContainer>
  )
}
