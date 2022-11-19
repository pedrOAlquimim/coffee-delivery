import styled, { css } from 'styled-components'

export type paddingSizeType = 'small' | 'medium'

interface PaddingProps {
  paddingSize: paddingSizeType
}

export const QuantityInputContainer = styled.div<PaddingProps>`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 0.25rem;
  border-radius: 6px;
  align-items: center;
  background: ${(props) => props.theme['base-button']};

  ${(props) => props.paddingSize === 'small' &&
    css`
      padding: 0.344rem 0.5rem;
    `
  }

  ${(props) => props.paddingSize === 'medium' &&
    css`
      padding: 0.5rem;
    `
  }
`

export const QuantityText = styled.p`
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};

  &:focus {
    outline: 0;
  }
`

export const QuantityButtons = styled.button`
  background: 0;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`