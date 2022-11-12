import styled from "styled-components";

export const PaymentButtonContainer = styled.button`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  padding: 1.125rem 1rem;
  align-items: center;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
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