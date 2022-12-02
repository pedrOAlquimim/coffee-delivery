import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputContainerError,
  InputContainer,
  InputStyle,
  OptionalText
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  optional?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ optional, className, error, ...props }, ref) => {

  return (
    <InputContainerError className={className}>
      <InputContainer isError={!!error}>
        <InputStyle 
          {...props}
          ref={ref}
        />
        {optional && <OptionalText>Optional</OptionalText>}
      </InputContainer>
      {error && <p>{error}</p>}
    </InputContainerError>
  )
})