    import styled from 'styled-components'
    import heroImg from '../../assets/apresentacao.png'

    /* ================= HEADER ================= */

export const TopBar = styled.header`
    width: 100%;
    height: 186px;

    background-color: #fff8f2;

    /*
        Vector EXATO do Figma
        (imagem exportada, sem recriar SVG)
    */
    background-image: url('/Vector.png'); /* ou hero-bg.png se for esse o nome */
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    display: flex;
    justify-content: center;
    `

    export const TopBarContent = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;

    padding: 0 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    `

    export const TopBarText = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    `

    export const Logo = styled.img`
    height: 36px;
    `

    /* ================= APRESENTAÇÃO ================= */

    export const Hero = styled.section`
    width: 100%;
    height: 280px;

    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;

    position: relative;
    display: flex;
    justify-content: center;
    `

    export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    `

    export const HeroInner = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;

    padding: 0 24px;

    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center; /* 🔥 FIX: texto central vertical */
    
    color: #ffffff;
    `

    export const RestaurantType = styled.span`
    font-size: 18px;
    margin-bottom: 8px;
    `

    export const RestaurantTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    `

    /* ================= PRODUTOS ================= */

    export const ProductsSection = styled.section`
    background-color: #fff8f2;
    padding: 56px 0;
    `

    export const ProductsContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    `

    export const ProductCard = styled.div`
    background-color: #e66767;
    padding: 8px;
    `

    export const ProductImage = styled.div`
    width: 100%;
    height: 167px;
    background-color: #ccc;
    `

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
        padding: 4px;
        font-weight: 700;
        cursor: pointer;
    }
    `

    /* ================= FOOTER ================= */

    export const Footer = styled.footer`
    width: 100%;
    height: 298px;
    background-color: #fff1e4;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    export const FooterContent = styled.div`
    max-width: 1366px;
    text-align: center;

    img {
        height: 36px;
        margin-bottom: 16px;
    }

    p {
        font-size: 10px;
        color: #e66767;
    }
    `
