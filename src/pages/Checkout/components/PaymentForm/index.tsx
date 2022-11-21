import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentButton } from "../PaymentButton";
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentFormButtons,
} from "./styles";

export function PaymentForm() {
  return (
    <PaymentFormContainer>
      <PaymentFormHeader>
        <span>
          <CurrencyDollar />
        </span>
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentFormHeader>

      <PaymentFormButtons>
        <PaymentButton
          icon={<CreditCard size={16} />}
          text="Cartão de Crédito"
        />
        <PaymentButton
          icon={<Bank size={16} />}
          text="Cartão de Débito"
        />
        <PaymentButton
          icon={<Money size={16} />}
          text="Dinheiro"
        />
      </PaymentFormButtons>
    </PaymentFormContainer>
  )
}