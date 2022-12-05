import { ReactNode } from 'react'
import { BackgroundColorType, Icon, InfoIconContainer, TextContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: ReactNode
  text2?: ReactNode
  backgroundColor: BackgroundColorType
}

export function InfoIcon({ icon, text, text2, backgroundColor }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <Icon backgroundColor={backgroundColor}>{icon}</Icon>
      <TextContainer>
        <p>{text}</p>
        <p>{text2}</p>
      </TextContainer>
    </InfoIconContainer>
  )
}
