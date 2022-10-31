import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 0.938rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const FormContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["base-card"]};
`

export const FormHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    font-size: 1.375rem;
    color: ${(props) => props.theme["yellow-dark"]}
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
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const Form = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
`