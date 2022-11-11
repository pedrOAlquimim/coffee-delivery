import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import {
  FormContainer,
  FormHeader,
  FormTag
} from './styles'

export function Form() {
  return (
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

      <FormTag>
        <Input
          placeholder='CEP'
          type='number'
          className='cep'
        />
        <Input
          placeholder='Rua'
          type='string'
          className='street'
        />
        <Input
          placeholder='Número'
          type='number'
        />
        <Input
          placeholder='Complemento'
          type='string'
          className='complement'
          optional
        />
        <Input
          placeholder='Bairro'
          type='string'
        />
        <Input
          placeholder='Cidade'
          type='string'
        />
        <Input
          placeholder='UF'
          type='string'
        />
      </FormTag>
    </FormContainer>
  )
}