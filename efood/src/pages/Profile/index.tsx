    import { useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import { useNavigate } from 'react-router-dom'

    import * as S from './styles'
    import logo from '../../assets/logo.png'
    import pizzaImg from '../../assets/pizza2.png'

    import ProductModal from '../../components/ProductModal'
    import Cart from '../../components/Cart'
    import CheckoutEntrega from '../../components/CheckoutEntrega'
    import CheckoutPagamento from '../../components/CheckoutPagamento'
    import CheckoutConfirmacao from '../../components/CheckoutConfirmacao'
    import Footer from '../../components/Footer'

    import { addItem, clearCart } from '../../store/cartSlice'
    import type { Product } from '../../types/Product'
    import type { RootState } from '../../store'

    type Etapa = 'cart' | 'entrega' | 'pagamento' | 'confirmacao'

    const Profile = () => {
    const navigate = useNavigate()

    const [modalAberto, setModalAberto] = useState(false)
    const [painelAberto, setPainelAberto] = useState(false)
    const [etapa, setEtapa] = useState<Etapa>('cart')

    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const quantidade = items.reduce((acc, item) => acc + item.quantity, 0)

    const produtoMock: Product = {
        id: 1,
        nome: 'Pizza Marguerita',

        //  descrição curta (CARD)
        descricao:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',

        //  descrição longa (MODAL)
        descricaoLonga:
            'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',

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

    function finalizarPedido() {
        dispatch(clearCart())
        setPainelAberto(false)
        setEtapa('cart')
        navigate('/')
    }

    return (
        <>
        {/* ================= HEADER ================= */}
        <S.TopBar>
            <S.TopBarContent>
            <S.TopBarText>Restaurantes</S.TopBarText>

            <S.Logo
                src={logo}
                alt="efood"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
            />

            <S.TopBarText
                style={{ cursor: 'pointer' }}
                onClick={() => {
                setEtapa('cart')
                setPainelAberto(true)
                }}
            >
                {quantidade} produto(s) no carrinho
            </S.TopBarText>
            </S.TopBarContent>
        </S.TopBar>

        {/* ================= HERO ================= */}
        <S.Hero>
            <S.HeroOverlay />
            <S.HeroInner>
            <S.RestaurantType>Italiana</S.RestaurantType>
            <S.RestaurantTitle>
                La Dolce Vita Trattoria
            </S.RestaurantTitle>
            </S.HeroInner>
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
                    <h3>{produtoMock.nome}</h3>
                        
                    <p>{produtoMock.descricao}</p>

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
        title={produtoMock.nome}
        description={produtoMock.descricaoLonga}
        image={produtoMock.foto}
        price={produtoMock.preco}
        portion={produtoMock.porcao}
        onClose={() => setModalAberto(false)}
        onAdd={adicionarAoCarrinho}
        />

        )}

        {/* ================= PAINEL LATERAL ================= */}
        {painelAberto && etapa === 'cart' && (
            <Cart
            onClose={() => setPainelAberto(false)}
            onNext={() => setEtapa('entrega')}
            />
        )}

        {painelAberto && etapa === 'entrega' && (
            <CheckoutEntrega
            onBack={() => setEtapa('cart')}
            onNext={() => setEtapa('pagamento')}
            />
        )}

        {painelAberto && etapa === 'pagamento' && (
            <CheckoutPagamento
            onBack={() => setEtapa('entrega')}
            onFinish={() => setEtapa('confirmacao')}
            />
        )}

        {painelAberto && etapa === 'confirmacao' && (
            <CheckoutConfirmacao onFinish={finalizarPedido} />
        )}

        <Footer />
        </>
    )
    }

    export default Profile
