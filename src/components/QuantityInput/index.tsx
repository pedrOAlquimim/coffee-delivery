import { Minus, Plus } from 'phosphor-react'
import {
  paddingSizeType,
  QuantityInputContainer,
  QuantityButtons,
} from './styles'

interface QuantityInputProps {
  paddingSize: paddingSizeType
}

export function QuantityInput({ paddingSize }: QuantityInputProps) {
  return (
    <QuantityInputContainer paddingSize={paddingSize}>
      <QuantityButtons>
        <Minus weight='bold' />
      </QuantityButtons>

      <input type="number" readOnly value={25} />

      <QuantityButtons>
        <Plus weight='bold' />
      </QuantityButtons>
    </QuantityInputContainer>
  )
}