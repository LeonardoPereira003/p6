import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../assets/logo.png'
import pizzaImg from '../../assets/pizza.jpg'

import ProductModal from '../../components/ProductModal'
import Cart from '../../components/Cart'

import { addItem } from '../../store/cartSlice'
import type { Product } from '../../types/Product'
import type { RootState } from '../../store'

const Profile = () => {
    // controla abertura do modal
    const [modalAberto, setModalAberto] = useState(false)

    // controla abertura do carrinho lateral
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)

    // Redux
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    // quantidade total de itens no carrinho (Redux)
    const quantidade = items.reduce(
        (acc, item) => acc + item.quantity,
        0
    )

    // PRODUTO MOCK (temporário – depois vem da API)
    const produtoMock: Product = {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao:
            'A clássica Marguerita: molho de tomate, mussarela derretida, manjericão fresco e um toque de azeite.',
        foto: pizzaImg,
        preco: 60.9,
        porcao: 'Serve: 2 pessoas'
    }

    // adiciona produto ao carrinho (Redux)
    function adicionarAoCarrinho() {
        dispatch(addItem(produtoMock))
        setModalAberto(false)
        setCarrinhoAberto(true)
    }

    return (
        <>
            {/* ================= HEADER ================= */}
            <S.TopBar>
                <S.TopBarContent>
                    <S.TopBarText>Restaurantes</S.TopBarText>

                    <S.Logo src={logo} alt="efood" />

                    {/* abre o carrinho */}
                    <S.TopBarText
                        style={{ cursor: 'pointer' }}
                        onClick={() => setCarrinhoAberto(true)}
                    >
                        {quantidade} produto(s) no carrinho
                    </S.TopBarText>
                </S.TopBarContent>
            </S.TopBar>

            {/* ================= HERO ================= */}
            <S.Hero>
                <S.HeroInner />
            </S.Hero>

            {/* ================= PRODUTOS ================= */}
            <S.ProductsSection>
                <S.ProductsContainer>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <S.ProductCard key={index}>
                            <S.ProductImage
                                src={pizzaImg}
                                alt="Pizza Marguerita"
                            />

                            <S.ProductInfo>
                                <h3>Pizza Marguerita</h3>
                                <p>
                                    A clássica Marguerita: molho de tomate,
                                    mussarela derretida, manjericão fresco
                                    e um toque de azeite.
                                </p>

                                {/* abre SOMENTE o modal */}
                                <button onClick={() => setModalAberto(true)}>
                                    Adicionar ao carrinho
                                </button>
                            </S.ProductInfo>
                        </S.ProductCard>
                    ))}
                </S.ProductsContainer>
            </S.ProductsSection>

            {/* ================= MODAL ================= */}
            {modalAberto && (
                <ProductModal
                    onClose={() => setModalAberto(false)}
                    onAdd={adicionarAoCarrinho}
                />
            )}

            {/* ================= CARRINHO ================= */}
            {carrinhoAberto && (
                <Cart onClose={() => setCarrinhoAberto(false)} />
            )}

            {/* ================= FOOTER ================= */}
            <S.Footer>
                <S.FooterContent>
                    <img src={logo} alt="efood" />
                    <p>
                        A efood é uma plataforma para divulgação de
                        estabelecimentos, a responsabilidade pela
                        entrega é toda do restaurante contratado.
                    </p>
                </S.FooterContent>
            </S.Footer>
        </>
    )
}

export default Profile
