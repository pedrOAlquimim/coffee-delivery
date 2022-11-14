import { Minus, Plus } from 'phosphor-react'
import {
  paddingSizeType,
  QuantityInputContainer,
  QuantityButtons,
  QuantityText
} from './styles'

interface QuantityInputProps {
  paddingSize: paddingSizeType
}

export function QuantityInput({ paddingSize }: QuantityInputProps) {
  return (
    <QuantityInputContainer paddingSize={paddingSize}>
      <QuantityButtons>
        <Minus size={14} weight='bold' />
      </QuantityButtons>

      <QuantityText>{20}</QuantityText>

      <QuantityButtons>
        <Plus size={14} weight='bold' />
      </QuantityButtons>
    </QuantityInputContainer>
  )
}