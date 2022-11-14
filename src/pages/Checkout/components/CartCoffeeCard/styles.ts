import styled from "styled-components";

export const CartCoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.125rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  p {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`

export const CartCoffeeCardOptions = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  max-width: 15.938rem;

  img {
    width: 4rem;
  }
`

export const CartCoffeeCardOptionsButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  span {
    line-height: 0;
    color: ${(props) => props.theme.purple};
  }
`