import styled, { css } from 'styled-components'

export type paddingSizeType = 'small' | 'medium'

interface PaddingProps {
  paddingSize: paddingSizeType
}

export const QuantityInputContainer = styled.div<PaddingProps>`
  display: flex;
  border-radius: 6px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};

  input {
    text-align: center;
    width: 100%;
    background: yellow;
    border: none;
    color: ${(props) => props.theme["base-title"]};

    &:focus {
      outline: 0;
    }
  }

  ${(props) => props.paddingSize === 'small' &&
    css`
      padding: 0.344rem 0.5rem;
    `
  }

  ${(props) => props.paddingSize === 'medium' &&
    css`
      padding: 0.531rem 0.5rem;
    `
  }
`

export const QuantityButtons = styled.button`
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