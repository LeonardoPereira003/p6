import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { removeItem } from '../../store/cartSlice'

// Componente do carrinho lateral
type Props = {
    onClose: () => void
}

const Cart = ({ onClose }: Props) => {
    const dispatch = useDispatch()

    // 🔥 BUSCA OS ITENS DO REDUX
    const items = useSelector((state: RootState) => state.cart.items)

    // Calcula o valor total
    const total = items.reduce(
        (acc, item) => acc + item.product.preco * item.quantity,
        0
    )

    return (
        <S.Overlay>
            <S.CartContainer>
                {/* Botão fechar */}
                <S.CloseArea onClick={onClose}>×</S.CloseArea>

                {/* Se não tiver itens */}
                {items.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    <>
                        {/* Lista de produtos */}
                        <S.Items>
                            {items.map((item) => (
                                <S.Item key={item.product.id}>
                                    <img src={item.product.foto} alt={item.product.nome} />

                                    <div>
                                        <h4>{item.product.nome}</h4>
                                        <span>
                                            R$ {item.product.preco.toFixed(2)}
                                        </span>
                                    </div>

                                    {/* Remove do carrinho */}
                                    <button
                                        title="Remover"
                                        onClick={() =>
                                            dispatch(removeItem(item.product.id))
                                        }
                                    >
                                        🗑️
                                    </button>
                                </S.Item>
                            ))}
                        </S.Items>

                        {/* Rodapé */}
                        <S.Summary>
                            <div>
                                <span>Valor total</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>

                            <button>Continuar com a entrega</button>
                        </S.Summary>
                    </>
                )}
            </S.CartContainer>
        </S.Overlay>
    )
}

export default Cart
