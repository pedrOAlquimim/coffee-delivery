import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeCartContext } from '../../context/CoffeeCartContext'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoBrand from '../../assets/logoBrand.svg'
import {
  HeaderContainer,
  City,
  CartQuantitySpan
} from './styles'

export function Header() {
  const { cartQuantity } = useContext(CoffeeCartContext)

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
            {cartQuantity >= 1 && <CartQuantitySpan>{cartQuantity}</CartQuantitySpan>}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
