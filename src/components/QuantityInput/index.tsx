import { Minus, Plus } from 'phosphor-react'
import {
  paddingSizeType,
  QuantityInputContainer,
  QuantityButtons,
  QuantityText
} from './styles'

interface QuantityInputProps {
  paddingSize: paddingSizeType
  quantity?: number
  onIncrease?: () => void
  onDrecrease?: () => void
}

export function QuantityInput({ paddingSize, quantity, onDrecrease, onIncrease }: QuantityInputProps) {
  return (
    <QuantityInputContainer paddingSize={paddingSize}>
      <QuantityButtons onClick={onDrecrease}>
        <Minus size={14} weight='bold' />
      </QuantityButtons>

      <QuantityText>{quantity}</QuantityText>

      <QuantityButtons onClick={onIncrease}>
        <Plus size={14} weight='bold' />
      </QuantityButtons>
    </QuantityInputContainer>
  )
}