import { CurrencyDollar, Timer, MapPin } from 'phosphor-react'
import { InfoIcon } from '../../components/InfoIcon'
import { addressFormData } from '../Checkout'
import successImg  from '../../assets/successImg.png'
import {
  Header,
  ContentContainer,
  InfoIconsContainer
} from './styles'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentMethods } from '../Checkout/components/PaymentForm'

interface LocationProps {
  state: addressFormData
}

export function Success() {
  const navigate = useNavigate()
  const { state } = useLocation() as LocationProps

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <div>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>

      <ContentContainer>
        <InfoIconsContainer>
          <InfoIcon
            backgroundColor="purple"
            icon={<MapPin weight="fill" />}
            text={<p>Entregue em <strong>{state.street}, {state.number}</strong></p>}
            text2={<p>{state.city} - {state.state}</p>}
          />
          <InfoIcon
            backgroundColor="yellow"
            icon={<Timer weight="fill" />}
            text={<p>Previsão de entrega</p>}
            text2={<p><strong>20 min - 30 min</strong></p>}
          />
          <InfoIcon
            backgroundColor="orange"
            icon={<CurrencyDollar weight="fill" />}
            text={<p>Pagamento na entrega</p>}
            text2={<p><strong>{paymentMethods[state.paymentMethod].text}</strong></p>}
          />
        </InfoIconsContainer>

        <img src={successImg} />
      </ContentContainer>
    </div>
  )
}
