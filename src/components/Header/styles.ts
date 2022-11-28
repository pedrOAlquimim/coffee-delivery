import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 2.0625rem;
  padding-bottom: 2.0625rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      a {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 6px;
        position: relative;

        color: ${(props) => props.theme['yellow-dark']};
        background: ${(props) => props.theme['yellow-light']};
      }
    }
  }
`

export const CartQuantitySpan = styled.span`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: calc(-1.25rem / 2.25);
  right: calc(-1.25rem / 2.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  outline: 3.5px solid ${(props) => props.theme.background};
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
`

export const City = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`
