import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  flex: 1;
  border-radius: 6px;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  background: ${(props) => props.theme['base-button']};

  input {
    width: 100%;
    text-align: center;
    background: none;
    border: none;

    color: ${(props) => props.theme["base-title"]};

    &:focus {
      outline: 0;
    }
  }
`

const QuantityButtons = styled.button`
  font-size: 0.875rem;
  background: 0;
  border: 0;
  line-height: 0;
  cursor: pointer;

  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const MinusButton = styled(QuantityButtons)`
  padding-left: 0.5rem;
`

export const PlusButton = styled(QuantityButtons)`
  padding-right: 0.5rem;
`