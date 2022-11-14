import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`
export const Container = styled.div`
  margin-top: 2.5rem;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PaymentForm = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
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
      line-height: 130%;
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
`


export const SelectedCoffeesContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["base-card"]};
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  line-height: 160%;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`