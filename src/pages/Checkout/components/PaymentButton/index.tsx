import { ReactNode } from 'react'
import {
  PaymentButtonContainer,
  Icon,
  Text
} from './styles'

interface PaymentButtonProps {
  icon: ReactNode
  text: string
}

export function PaymentButton({ icon, text }: PaymentButtonProps) {
  return (
    <PaymentButtonContainer>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </PaymentButtonContainer>
  )
}