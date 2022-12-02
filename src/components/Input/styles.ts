import styled, {css} from 'styled-components'

export const InputContainerError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-error']};
  }
`

interface InputContainerProps {
  isError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${({ theme, isError }) =>
    isError &&
    css`
      border-color: ${theme['base-error']};
    `
  }
`

export const InputStyle = styled.input`
  flex: 1;
  font-size: 0.875rem;
  background: 0;
  border: 0;
  outline: 0;
  height: 100%;
  padding: 0 0.75rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const OptionalText = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  margin-right: 0.75rem;
  color: ${(props) => props.theme['base-label']};
`