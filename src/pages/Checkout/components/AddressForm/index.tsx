import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import {
  FormContainer,
  FormHeader,
  FormTag
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as ErrorsType

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
          error={errors.cep?.message}
        />
        <Input
          placeholder='Rua'
          className='street'
          {...register('street')}
          error={errors.street?.message}
        />
        <Input
          placeholder='Número'
          type='number'
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder='Complemento'
          className='complement'
          optional
          {...register('complement')}
          error={errors.complement?.message}
        />
        <Input
          placeholder='Bairro'
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder='Cidade'
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder='UF'
          {...register('state')}
          error={errors.state?.message}
        />
      </FormTag>
    </FormContainer>
  )
}