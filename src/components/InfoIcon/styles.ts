import styled from "styled-components";

export type BackgroundColorType = 'yellow' | 'orange' | 'gray' | 'purple'

const backgroundColorType = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple'
} as const

interface InfoIconStylesProps {
  backgroundColor: BackgroundColorType
}

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Icon = styled.div<InfoIconStylesProps>`
  ${props => {
    return `background-color: ${backgroundColorType[props.backgroundColor]}`
  }}
`