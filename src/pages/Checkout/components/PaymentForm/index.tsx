import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentButton } from '../PaymentButton'
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentFormButtons,
  PaymentFormButtonsErrorMessage
} from './styles'

export const paymentMethods = {
  credit: {
    icon: <CreditCard size={16} />,
    text: 'Cartão de Crédito'
  },
  debit: {
    icon: <Bank size={16} />,
    text: 'Cartão de Débito'
  },
  money: {
    icon: <Money size={16} />,
    text: 'Dinheiro'
  }
}

export function PaymentForm() {
  const { register, formState: {errors} } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <PaymentFormContainer>
      <PaymentFormHeader>
        <span>
          <CurrencyDollar />
        </span>
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentFormHeader>

      <PaymentFormButtons>
        {Object.entries(paymentMethods).map(([key, { text, icon }]) => (
          <PaymentButton
            key={text}
            id={key}
            icon={icon}
            text={text}
            value={key}
            {...register("paymentMethod")}
          />
        ))}
      </PaymentFormButtons>
      
      {paymentMethodError && <PaymentFormButtonsErrorMessage>{paymentMethodError}</PaymentFormButtonsErrorMessage>}
    </PaymentFormContainer>
  )
}