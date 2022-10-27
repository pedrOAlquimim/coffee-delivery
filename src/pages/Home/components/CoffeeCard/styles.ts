import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  background: ${(props) => props.theme['base-card']};
`

export const HeaderCardContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    border-radius: 999px;
    text-transform: uppercase;
    line-height: 130%;
    padding: 0.25rem 0.5rem;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const Title = styled.div`
  h2 {
    font-family: 'baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};
  }
`

export const PriceFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.438rem;
`

export const RegularText = styled.span`
  font-size: 0.875rem;
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 0.188rem;
`

export const AmountAndCart = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    border: 0;
    padding: 0.5rem 0.5rem 0.375rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const AmountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
`
