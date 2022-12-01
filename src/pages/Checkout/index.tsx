import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as zod from 'zod'
import {
  FormCheckoutContainer,
  Container,
  Title,
} from './styles'

const addressValidationFormSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP').max(9),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o Estado' ).max(2)
})

type addressFormData = zod.infer<typeof addressValidationFormSchema >

export function Checkout() {
  const addressValidationForm = useForm<addressFormData>({
    resolver: zodResolver(addressValidationFormSchema),
  })
  const { handleSubmit } = addressValidationForm

  function handleFinishOrder(data: addressFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...addressValidationForm}>
        <FormCheckoutContainer onSubmit={handleSubmit(handleFinishOrder)}>
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
    </FormProvider>
  )
}
