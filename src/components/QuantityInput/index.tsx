import { Minus, Plus } from 'phosphor-react'
import {
  QuantityInputContainer,
  MinusButton,
  PlusButton,
} from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <MinusButton>
        <Minus weight='bold' />
      </MinusButton>

      <input type="number" readOnly />

      <PlusButton>
        <Plus weight='bold' />
      </PlusButton>
    </QuantityInputContainer>
  )
}