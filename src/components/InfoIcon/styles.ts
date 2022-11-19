import styled from 'styled-components'

export type BackgroundColorType = 'yellow' | 'orange' | 'gray' | 'purple'

const backgroundColorType = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const

interface InfoIconStylesProps {
  backgroundColor: BackgroundColorType
}

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Icon = styled.div<InfoIconStylesProps>`
  line-height: 0;
  padding: 0.5rem;
  border-radius: 9999px;
  font-size: 1rem;

  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[backgroundColorType[props.backgroundColor]]};
`
