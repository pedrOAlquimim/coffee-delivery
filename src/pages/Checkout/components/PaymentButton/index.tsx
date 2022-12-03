import { ReactNode, forwardRef, InputHTMLAttributes } from 'react'
import {
  PaymentMethodContainer,
  PaymentButtonContainer,
  Icon,
  Text,
} from './styles'

type PaymentButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  text: string
}

export const PaymentButton = forwardRef<HTMLInputElement, PaymentButtonProps>(({id, icon, text, ...props}, ref) => { 
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} ref={ref} />
      <label htmlFor={id}>
        <PaymentButtonContainer>
          <Icon>{icon}</Icon>
          <Text>{text}</Text>
        </PaymentButtonContainer>
      </label>
    </PaymentMethodContainer>
  )
})