import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../assets/logo.png'
import pizzaImg from '../../assets/pizza.jpg'

import ProductModal from '../../components/ProductModal'
import Cart from '../../components/Cart'
import CheckoutEntrega from '../../components/CheckoutEntrega'
import Footer from '../../components/Footer'

import { addItem } from '../../store/cartSlice'
import type { Product } from '../../types/Product'
import type { RootState } from '../../store'

const Profile = () => {
    const [modalAberto, setModalAberto] = useState(false)
    const [painelAberto, setPainelAberto] = useState(false)
    const [etapa, setEtapa] = useState<'cart' | 'checkout'>('cart')

    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const quantidade = items.reduce(
        (acc, item) => acc + item.quantity,
        0
    )

    const produtoMock: Product = {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao:
            'A clássica Marguerita: molho de tomate, mussarela derretida, manjericão fresco e um toque de azeite.',
        foto: pizzaImg,
        preco: 60.9,
        porcao: 'Serve: 2 pessoas'
    }

    function adicionarAoCarrinho() {
        dispatch(addItem(produtoMock))
        setModalAberto(false)
        setEtapa('cart')
        setPainelAberto(true)
    }

    return (
        <>
            <S.TopBar>
                <S.TopBarContent>
                    <S.TopBarText>Restaurantes</S.TopBarText>
                    <S.Logo src={logo} alt="efood" />

                    <S.TopBarText
                        onClick={() => {
                            setEtapa('cart')
                            setPainelAberto(true)
                        }}
                    >
                        {quantidade} produto(s) no carrinho
                    </S.TopBarText>
                </S.TopBarContent>
            </S.TopBar>

            <S.Hero>
                <S.HeroInner />
            </S.Hero>

            <S.ProductsSection>
                <S.ProductsContainer>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <S.ProductCard key={index}>
                            <S.ProductImage src={pizzaImg} />

                            <S.ProductInfo>
                                <h3>Pizza Marguerita</h3>
                                <p>
                                    A clássica Marguerita: molho de tomate,
                                    mussarela derretida, manjericão fresco.
                                </p>

                                <button onClick={() => setModalAberto(true)}>
                                    Adicionar ao carrinho
                                </button>
                            </S.ProductInfo>
                        </S.ProductCard>
                    ))}
                </S.ProductsContainer>
            </S.ProductsSection>

            {modalAberto && (
                <ProductModal
                    onClose={() => setModalAberto(false)}
                    onAdd={adicionarAoCarrinho}
                />
            )}

            {painelAberto && etapa === 'cart' && (
                <Cart
                    onClose={() => setPainelAberto(false)}
                    onNext={() => setEtapa('checkout')}
                />
            )}

            {painelAberto && etapa === 'checkout' && (
                <CheckoutEntrega
                    onBack={() => setEtapa('cart')}
                    onNext={() => alert('Pagamento vem na próxima etapa')}
                />
            )}

            <Footer />
        </>
    )
}

export default Profile
