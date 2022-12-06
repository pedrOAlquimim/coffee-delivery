import styled from "styled-components";

export const FormCheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin-bottom: 9.813rem;
  
  @media (max-width: 1279px) {
    flex-wrap: wrap;
    gap: 0;
  }
`

export const Container = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  
  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`