import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  width: 100%;
  
  input  {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {

  ${(props) => css`
    background: ${props.theme["purple-light"]};
    outline: 1px solid ${props.theme.purple};

    &:hover {
      background: ${props.theme["purple-light"]};
    }
  `}
  }
`

export const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Icon = styled.span`
  line-height: 0;
  color: ${(props) => props.theme.purple};
`

export const Text = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
`