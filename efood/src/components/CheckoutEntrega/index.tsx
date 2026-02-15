import * as S from './styles'

// =====================
// PROPS DO CHECKOUT
// =====================
type Props = {
    onBack: () => void
    onNext: () => void
}

const CheckoutEntrega = ({ onBack, onNext }: Props) => {
    return (
        <S.Overlay>
            <S.Container>
                <h2>Entrega</h2>

                <form>
                    <label>Quem irá receber</label>
                    <input placeholder="Nome do recebedor" />

                    <label>Endereço</label>
                    <input placeholder="Rua e número" />

                    <label>Cidade</label>
                    <input placeholder="Cidade" />

                    {/* 🔥 CEP + Número lado a lado */}
                    <S.Row>
                        <S.Field>
                            <label>CEP</label>
                            <input placeholder="00000-000" />
                        </S.Field>

                        <S.Field>
                            <label>Número</label>
                            <input placeholder="00000000" />
                        </S.Field>
                    </S.Row>

                    <label>Complemento (opcional)</label>
                    <input placeholder="Apartamento, bloco..." />

                    <S.Actions>
                        <button type="button" onClick={onNext}>
                            Continuar com o pagamento
                        </button>

                        <button type="button" onClick={onBack}>
                            Voltar para o carrinho
                        </button>
                    </S.Actions>
                </form>
            </S.Container>
        </S.Overlay>
    )
}

export default CheckoutEntrega
