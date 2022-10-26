import { ReactNode } from 'react'
import { BackgroundColorType, Icon, InfoIconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  backgroundColor: BackgroundColorType
}

export function InfoIcon({ icon, text, backgroundColor }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <Icon backgroundColor={backgroundColor}>{icon}</Icon>
      <p>{text}</p>
    </InfoIconContainer>
  )
}
