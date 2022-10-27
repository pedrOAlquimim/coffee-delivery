import { HeaderContainer, City } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoBrand from '../../assets/logoBrand.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logoBrand} alt="" />
        </NavLink>

        <div>
          <City>
            <MapPin size={22} weight="fill" />
            <p>São Paulo, SP</p>
          </City>

          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
