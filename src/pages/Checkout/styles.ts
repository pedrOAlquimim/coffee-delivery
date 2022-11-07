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