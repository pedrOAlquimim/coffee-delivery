import { ShoppingCart } from "phosphor-react";
import coffeeImage from '../../assets/coffeeImage.svg'
import {
  IntroContainer,
  IntroDescriptionContainer,
  TitleContainer,
  InfoIntroItems
} from "./style"

export function Home() {
  return (
    <div>
      <IntroContainer>
        <IntroDescriptionContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TitleContainer>

          <InfoIntroItems>
            <div>
              <ShoppingCart size={22} weight='fill'/>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <ShoppingCart size={22} weight='fill' />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <ShoppingCart size={22} weight='fill' />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <ShoppingCart size={22} weight='fill' />
              <p>Compra simples e segura</p>
            </div>
          </InfoIntroItems>
        </IntroDescriptionContainer>

        <img src={coffeeImage} />
      </IntroContainer>

      <section>
        <h2>Nossos cafés</h2>
      </section>
    </div>
  )
}