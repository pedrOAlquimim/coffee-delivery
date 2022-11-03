import { MapPinLine } from 'phosphor-react'
import { Input } from '../../components/Input'
import {
  CheckoutContainer,
  Title,
  FormContainer,
  FormHeader,
  Form
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <FormHeader>
            <span>
              <MapPinLine />
            </span>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormHeader>

          <form>
            <Form>
              <Input />
            </Form>
          </form>
        </FormContainer>

        <div>

        </div>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </CheckoutContainer>
  )
}
