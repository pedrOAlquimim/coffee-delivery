import styled from "styled-components";

export const FormCheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 2rem;
`

export const Container = styled.div`
  margin-top: 2.5rem;
  width: 100%;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`