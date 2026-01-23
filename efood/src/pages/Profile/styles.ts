    import styled from 'styled-components'
    import heroImg from '../../assets/apresentacao.png'

    /*
    ==================================================
    HEADER DO PERFIL (TOPBAR)
    ==================================================

    - Mesmo padrão visual da Home
    - Alinhado corretamente com o conteúdo
    - Responsivo conforme Figma
    */
    export const TopBar = styled.header`
    width: 100%;
    height: 186px;
    background-color: #fff8f2;

    /* Vector exportado do Figma */
    background-image: url('/Vector.png');
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    display: flex;
    justify-content: center;

    /* ================= MOBILE ================= */
    @media (max-width: 768px) {
        height: 140px;
    }
    `

    /*
    Container central para alinhar
    logo, texto e carrinho com os cards
    */
    export const TopBarContent = styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;

    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    `

    /* Texto "Restaurantes" e contador do carrinho */
    export const TopBarText = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;

    @media (max-width: 768px) {
        font-size: 14px;
    }
    `

    /* Logo central */
    export const Logo = styled.img`
    height: 36px;

    @media (max-width: 768px) {
        height: 28px;
    }
    `

    /*
    ==================================================
    HERO / BANNER DO PERFIL
    ==================================================

    IMPORTANTE (ponto do professor):
    ❌ NÃO usar imagem com texto embutido
    ✅ Imagem limpa + textos criados via HTML
    */
    export const Hero = styled.section`
    width: 100%;
    height: 280px;

    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;

    position: relative;

    @media (max-width: 768px) {
        height: 220px;
    }
    `

    /*
    Overlay escuro conforme Figma
    (para garantir contraste do texto)
    */
    export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    `

    /*
    Conteúdo textual do banner
    (tipo + nome do restaurante)
    */
    export const HeroInner = styled.div`
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    padding: 24px 16px;

    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    color: #ffffff;
    `

    /* Tipo do restaurante (ex: Italiana) */
    export const RestaurantType = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
    `

    /* Nome do restaurante */
    export const RestaurantTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 22px;
    }
    `

    /*
    ==================================================
    LISTAGEM DE PRODUTOS
    ==================================================
    */
    export const ProductsSection = styled.section`
    background-color: #fff8f2;
    padding: 56px 0;

    @media (max-width: 768px) {
        padding: 32px 0;
    }
    `

    /*
    Grid de produtos:
    - 3 colunas no desktop
    - 2 no tablet
    - 1 no mobile
    */
    export const ProductsContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
    `

    /* Card individual do produto */
    export const ProductCard = styled.div`
    background-color: #e66767;
    padding: 8px;
    `

    /* Imagem do produto */
    export const ProductImage = styled.img`
    width: 100%;
    height: 167px;
    object-fit: cover;
    `

    /* Informações do produto */
    export const ProductInfo = styled.div`
    padding: 8px;
    color: #fff;

    h3 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 8px;
    }

    button {
        width: 100%;
        background-color: #fff;
        color: #e66767;
        border: none;
        padding: 6px;
        font-weight: 700;
        cursor: pointer;
    }
    `
