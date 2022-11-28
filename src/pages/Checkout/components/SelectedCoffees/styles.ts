import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["base-card"]};
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  div {
    display: flex;
    justify-content: space-between;
  }
`

export const PriceTotal = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
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
  transition: all 0.5s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`


export const WithoutCoffeeDivContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.2rem;
    padding: 11.863rem 0;
  }
`