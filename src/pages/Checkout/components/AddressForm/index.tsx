import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import {
  FormContainer,
  FormHeader,
  FormTag
} from './styles'

export function AddressForm() {
  const { register } = useFormContext()

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
          {...register('cep')}
        />
        <Input
          placeholder='Rua'
          className='street'
          {...register('street')}
        />
        <Input
          placeholder='Número'
          type='number'
          {...register('number')}
        />
        <Input
          placeholder='Complemento'
          className='complement'
          optional
          {...register('complement')}
        />
        <Input
          placeholder='Bairro'
          {...register('district')}
        />
        <Input
          placeholder='Cidade'
          {...register('city')}
        />
        <Input
          placeholder='UF'
          {...register('state')}
        />
      </FormTag>
    </FormContainer>
  )
}