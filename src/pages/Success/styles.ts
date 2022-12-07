import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoIconsContainer = styled.div`
  width: 100%;
  max-width: 32.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 6px 36px 6px 36px;
`