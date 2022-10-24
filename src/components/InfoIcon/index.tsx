import { ShoppingCart } from "phosphor-react";
import { ReactNode } from "react"
import {
  BackgroundColorType,
  Icon,
  InfoIconContainer
} from './styles'

interface InfoIconProps {
  children?: ReactNode;
  backgroundColor: BackgroundColorType
}

export function InfoIcon({ children, backgroundColor}: InfoIconProps) {
  return (
    <InfoIconContainer>
      <Icon backgroundColor={backgroundColor}>
        <ShoppingCart size={16} />
      </Icon>
      <p>Compra simples e segura</p>
    </InfoIconContainer>
  )
}