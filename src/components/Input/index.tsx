import {
  InputContainer,
  InputStyle,
  OptionalText
} from './styles'

interface InputProps {
  optional?: boolean
  placeholder: string
  type?: string
  className?: string
}

export function Input({ optional, placeholder, type, className }: InputProps) {
  return (
    <InputContainer className={className}>
      <InputStyle 
        placeholder={placeholder}
        type={type}
      />
      {optional && <OptionalText>Optional</OptionalText>}
    </InputContainer>
  )
}