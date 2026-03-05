    import { useState, useEffect } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import { useNavigate, useParams } from 'react-router-dom'

    import * as S from './styles'
    import logo from '../../assets/logo.png'

    import ProductModal from '../../components/ProductModal'
    import Cart from '../../components/Cart'
    import CheckoutEntrega from '../../components/CheckoutEntrega'
    import CheckoutPagamento from '../../components/CheckoutPagamento'
    import CheckoutConfirmacao from '../../components/CheckoutConfirmacao'
    import Footer from '../../components/Footer'

    import { addItem, clearCart } from '../../store/cartSlice'
    import type { RootState } from '../../store'
    import type { Product } from '../../types/Product'
    import type { Restaurant } from '../../types/Restaurant'

    type Etapa = 'cart' | 'entrega' | 'pagamento' | 'confirmacao'

    const Profile = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const quantidade = items.reduce((acc, item) => acc + item.quantity, 0)

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
    const [modalAberto, setModalAberto] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(null)

    const [painelAberto, setPainelAberto] = useState(false)
    const [etapa, setEtapa] = useState<Etapa>('cart')

    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        async function fetchRestaurant() {
        const response = await fetch(
            `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`
        )
        const data: Restaurant = await response.json()
        setRestaurant(data)
        }

        fetchRestaurant()
    }, [id])

    function adicionarAoCarrinho() {
        if (produtoSelecionado) {
        dispatch(addItem(produtoSelecionado))
        setModalAberto(false)
        setEtapa('cart')
        setPainelAberto(true)
        }
    }

    async function enviarPedido() {
        const response = await fetch(
        'https://api-ebac.vercel.app/api/efood/checkout',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            products: items.map((item) => ({
                id: item.product.id,
                price: item.product.preco
            })),
            delivery: {
                receiver: 'Cliente',
                address: {
                description: 'Endereço',
                city: 'Cidade',
                zipCode: '00000000',
                number: 123,
                complement: ''
                }
            },
            payment: {
                card: {
                name: 'Nome',
                number: '0000000000000000',
                code: 123,
                expires: {
                    month: 10,
                    year: 25
                }
                }
            }
            })
        }
        )

        const data = await response.json()
        setOrderId(data.orderId)

        setEtapa('confirmacao')
    }

    function finalizarPedido() {
        dispatch(clearCart())
        setPainelAberto(false)
        setEtapa('cart')
        navigate('/')
    }

    if (!restaurant) return <p>Carregando...</p>

    return (
        <>
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

        <S.Hero style={{ backgroundImage: `url(${restaurant.capa})` }}>
            <S.HeroOverlay />
            <S.HeroInner>
            <S.RestaurantType>{restaurant.tipo}</S.RestaurantType>
            <S.RestaurantTitle>{restaurant.titulo}</S.RestaurantTitle>
            </S.HeroInner>
        </S.Hero>

        <S.ProductsSection>
            <S.ProductsContainer>
            {restaurant.cardapio.map((produto) => (
                <S.ProductCard key={produto.id}>
                <S.ProductImage src={produto.foto} alt={produto.nome} />

                <S.ProductInfo>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>

                    <button
                    onClick={() => {
                        setProdutoSelecionado(produto)
                        setModalAberto(true)
                    }}
                    >
                    Adicionar ao carrinho
                    </button>
                </S.ProductInfo>
                </S.ProductCard>
            ))}
            </S.ProductsContainer>
        </S.ProductsSection>

        {modalAberto && produtoSelecionado && (
            <ProductModal
            title={produtoSelecionado.nome}
            description={produtoSelecionado.descricao}
            image={produtoSelecionado.foto}
            price={produtoSelecionado.preco}
            portion={produtoSelecionado.porcao}
            onClose={() => setModalAberto(false)}
            onAdd={adicionarAoCarrinho}
            />
        )}

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
            onFinish={enviarPedido}
            />
        )}

        {painelAberto && etapa === 'confirmacao' && (
            <CheckoutConfirmacao
            orderId={orderId}
            onFinish={finalizarPedido}
            />
        )}

        <Footer />
        </>
    )
    }

    export default Profile