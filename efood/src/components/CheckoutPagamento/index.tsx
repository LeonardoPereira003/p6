import * as S from './styles'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

// =====================
// PROPS DO PAGAMENTO
// =====================
type Props = {
    onBack: () => void
    onFinish: () => void
}

const CheckoutPagamento = ({ onBack, onFinish }: Props) => {
    const items = useSelector((state: RootState) => state.cart.items)

    const total = items.reduce(
        (acc, item) => acc + item.product.preco * item.quantity,
        0
    )

    return (
        <S.Overlay>
            <S.Container>
                <h2>Pagamento - Valor a pagar R$ {total.toFixed(2)}</h2>

                <form>
                    <label>Nome no cartão</label>
                    <input placeholder="Nome impresso no cartão" />

                    {/* Número + CVV */}
                    <S.Row>
                        <S.Field>
                            <label>Número do cartão</label>
                            <input placeholder="0000 0000 0000 0000" />
                        </S.Field>

                        <S.SmallField>
                            <label>CVV</label>
                            <input placeholder="123" />
                        </S.SmallField>
                    </S.Row>

                    {/* Mês + Ano */}
                    <S.Row>
                        <S.SmallField>
                            <label>Mês de vencimento</label>
                            <input placeholder="MM" />
                        </S.SmallField>

                        <S.SmallField>
                            <label>Ano de vencimento</label>
                            <input placeholder="AA" />
                        </S.SmallField>
                    </S.Row>

                    <S.Actions>
                        <button type="button" onClick={onFinish}>
                            Finalizar pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para a edição de endereço
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutPagamento
