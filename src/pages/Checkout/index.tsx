import { FormProvider, useForm } from 'react-hook-form'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import {
  FormCheckoutContainer,
  Container,
  Title,
} from './styles'

export function Checkout() {
  const { register, handleSubmit } = useForm()

  return (
      <FormCheckoutContainer onSubmit={handleSubmit(() => {})}>
        <Container>
          <Title>Complete seu pedido</Title>
          <AddressForm />

          <PaymentForm />
        </Container>

        <Container>
          <Title>Cafés selecionados</Title>
          <SelectedCoffees />
        </Container>
      </FormCheckoutContainer>
  )
}
