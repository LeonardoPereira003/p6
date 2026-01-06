import * as S from './styles'
import logo from '../../assets/logo.png'

const Profile = () => {
    return (
        <>
            {/* HEADER */}
            <S.TopBar>
                <S.TopBarContent>
                    <S.TopBarText>Restaurantes</S.TopBarText>
                    <S.Logo src={logo} alt="efood" />
                    <S.TopBarText>0 produto(s) no carrinho</S.TopBarText>
                </S.TopBarContent>
            </S.TopBar>

            {/* APRESENTAÇÃO */}
            <S.Hero>
                <S.HeroInner>
                </S.HeroInner>
            </S.Hero>

            {/* PRODUTOS */}
            <S.ProductsSection>
                <S.ProductsContainer>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <S.ProductCard key={index}>
                            <S.ProductImage />
                            <S.ProductInfo>
                                <h3>Pizza Marguerita</h3>
                                <p>
                                    A clássica Marguerita: molho de tomate,
                                    mussarela derretida, manjericão fresco
                                    e um toque de azeite.
                                </p>
                                <button>Adicionar ao carrinho</button>
                            </S.ProductInfo>
                        </S.ProductCard>
                    ))}
                </S.ProductsContainer>
            </S.ProductsSection>

            {/* RODAPÉ */}
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
