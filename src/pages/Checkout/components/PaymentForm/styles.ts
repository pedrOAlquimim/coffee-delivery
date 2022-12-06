import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const PaymentFormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    font-size: 1.375rem;
    color: ${(props) => props.theme.purple};
  }

  div {
    gap: 0.125rem;

    h4 {
      font-weight: 400;
      font-size: 1rem;

      color: ${(props) => props.theme["base-title"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`

export const PaymentFormButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 624px) {
    flex-direction: column;
  }
`

export const PaymentFormButtonsErrorMessage = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-error']};
`