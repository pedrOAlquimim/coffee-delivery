import { MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import {
  FormContainer,
  FormHeader,
  FormTag
} from './styles'

export function AddressForm() {
  const { register } = useForm()


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
          {...register('cep', {valueAsNumber: true})}
        />
        <Input
          placeholder='Rua'
          type='string'
          className='street'
          {...register('street')}
        />
        <Input
          placeholder='Número'
          type='number'
          {...register('number', { valueAsNumber: true })}
        />
        <Input
          placeholder='Complemento'
          type='string'
          className='complement'
          optional
          {...register('complement')}
        />
        <Input
          placeholder='Bairro'
          type='string'
          {...register('block')}
        />
        <Input
          placeholder='Cidade'
          type='string'
          {...register('city')}
        />
        <Input
          placeholder='UF'
          type='string'
          {...register('state')}
        />
      </FormTag>
    </FormContainer>
  )
}