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
    // 🔥 Pega os itens do carrinho
    const items = useSelector((state: RootState) => state.cart.items)

    // 🔥 Calcula o total corretamente
    const total = items.reduce(
        (acc, item) => acc + item.product.preco * item.quantity,
        0
    )

    return (
        <S.Overlay>
            <S.Container>
                <h2>
                    Pagamento – Valor a pagar R$ {total.toFixed(2)}
                </h2>

                <form>
                    <label>Nome no cartão</label>
                    <input placeholder="Nome impresso no cartão" />

                    <label>Número do cartão</label>
                    <input placeholder="0000 0000 0000 0000" />

                    <S.Row>
                        <div style={{ flex: 1 }}>
                            <label>CVV</label>
                            <input placeholder="123" />
                        </div>

                        <div style={{ flex: 1 }}>
                            <label>Validade</label>
                            <input placeholder="MM/AA" />
                        </div>
                    </S.Row>

                    <S.Actions>
                        <button type="button" onClick={onFinish}>
                            Finalizar pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para entrega
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutPagamento
