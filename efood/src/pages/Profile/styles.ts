    import styled from 'styled-components'
    import heroImg from '../../assets/apresentacao.png'
    import vectorBg from '../../../public/Vector.png'

    /*
    ==================================================
    HEADER DO PERFIL (TOPBAR)
    ==================================================
    */

    export const TopBar = styled.header`
    width: 100%;
    height: 186px;
    background-color: #fff8f2;

    background-image: url(${vectorBg});
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        height: 140px;
    }
    `

    export const TopBarContent = styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    `

    export const TopBarText = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;

    @media (max-width: 768px) {
        font-size: 14px;
    }
    `

    /* ✅ LOGO EXATA DO FIGMA */
    export const Logo = styled.img`
    width: 125px;
    height: 57.5px;

    @media (max-width: 768px) {
        width: 96px;
        height: auto;
    }
    `

    /*
    ==================================================
    HERO / BANNER
    ==================================================
    */

    export const Hero = styled.section`
    width: 100%;
    height: 280px;

    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    `

    /* ✅ Overlay correto (50%) */
    export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    `

    /* Container interno alinhado ao grid 1024 */
    export const HeroInner = styled.div`
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px 32px 16px;

    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    color: #ffffff;
    `

    /* ✅ ITALIANA — exatamente como no Figma */
    export const RestaurantType = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 100;
    line-height: 100%;
    color: #ffffff;

    margin-bottom: 8px;

    /* sobe somente ele */
    transform: translateY(-150px);

    @media (max-width: 768px) {
        font-size: 20px;
    }
    `

    /* ✅ TÍTULO PRINCIPAL */
    export const RestaurantTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: 100%;
    letter-spacing: 0;
    color: #ffffff;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`


    /*
    ==================================================
    PRODUTOS
    ==================================================
    */

    export const ProductsSection = styled.section`
    background-color: #fff8f2;
    padding: 56px 0;

    @media (max-width: 768px) {
        padding: 32px 0;
    }
    `

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

    export const ProductCard = styled.div`
    background-color: #e66767;
    padding: 8px;
    `

    export const ProductImage = styled.img`
    width: 100%;
    height: 167px;
    object-fit: cover;
    `

    export const ProductInfo = styled.div`
    padding: 8px;
    color: #FFEBD9;

    h3 {
        font-size: 16px;
        margin-bottom: 8px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 8px;
        font-weight: 700;
        color: #FFEBD9; 
    }

    button {
        width: 100%;
        background-color: #FFEBD9;
        height: 24px;
        color: #e66767;
        border: none;
        padding: 6px;
        font-weight: 700;
        cursor: pointer;
    }
    `
