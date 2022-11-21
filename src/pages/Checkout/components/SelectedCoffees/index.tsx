import {
  SelectedCoffeesContainer,
  PriceContainer,
  PriceTotal,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>

      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <PriceTotal>Total</PriceTotal>
          <PriceTotal>R$ 33,20</PriceTotal>
        </div>
      </PriceContainer>

      <ConfirmOrderButton>
        Confirmar Pedido
      </ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}