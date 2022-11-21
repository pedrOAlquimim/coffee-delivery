import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: 9.813rem;
`

export const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 5.75rem;
  margin-bottom: 5.75rem;
`

export const IntroDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TitleContainer = styled.div`
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoIntroItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`

export const CoffeeTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.875rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`