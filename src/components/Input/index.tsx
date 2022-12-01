import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputContainer,
  InputStyle,
  OptionalText
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  optional?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>( ({ optional, className, ...props }, ref) => {
  return (
    <InputContainer className={className}>
      <InputStyle 
        {...props}
        ref={ref}
      />
      {optional && <OptionalText>Optional</OptionalText>}
    </InputContainer>
  )
})