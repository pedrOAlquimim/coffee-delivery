import { InfoIcon } from "../../components/InfoIcon";
import { CoffeeCard } from "./components/CoffeeCard";
import coffeeImage from '../../assets/coffeeImage.svg'
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import {
  IntroContainer,
  IntroDescriptionContainer,
  TitleContainer,
  InfoIntroItems,
  CoffeeList,
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
            <InfoIcon
              backgroundColor="orange"
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              backgroundColor="gray"
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoIcon
              backgroundColor="yellow"
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoIcon
              backgroundColor="purple"
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </InfoIntroItems>
        </IntroDescriptionContainer>

        <img src={coffeeImage} />
      </IntroContainer>

      <section>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </section>
    </div>
  )
}