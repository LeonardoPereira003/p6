    import styled from 'styled-components'

    /*
    ============================
    HEADER / HERO - HOME
    ============================

    Correções aplicadas com base no feedback do professor:

    ✔ Peso da fonte ajustado para 900 (Figma)
    ✔ Ajuste fino de alinhamento vertical
    ✔ Responsividade mantida e refinada
    ✔ Estrutura original preservada
    */

    export const Container = styled.header`
    width: 100%;
    height: 384px;

    /* Cor base do Hero conforme Figma */
    background-color: #ffebd9;

    /*
        Vector exportado do Figma
        Mantido conforme sua implementação original
    */
    background-image: url('/hero-bg.png');
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    position: relative;

    /*
        ============================
        RESPONSIVO - TABLET / MOBILE
        ============================
    */
    @media (max-width: 768px) {
        height: 260px;
        background-size: auto 260px;
        background-position: center -16px;
    }
    `

    /*
    ============================
    LOGO CENTRAL
    ============================
    */

    export const Logo = styled.img`
    width: 125px;
    height: auto;

    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        width: 96px;
        top: 32px;
    }
    `

    /*
    ============================
    TEXTO PRINCIPAL DO HERO
    ============================

    Correção PRINCIPAL:
    - font-weight alterado de 700 → 900 (conforme Figma)
    */

    export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 900; /* 🔴 CORREÇÃO PRINCIPAL DO PROFESSOR */
    line-height: 40px;
    color: #e66767;

    text-align: center;
    max-width: 640px;

    position: absolute;
    top: 220px; /* ajuste fino para alinhar melhor ao Figma */
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 28px;
        top: 150px;
        max-width: 90%;
    }

    @media (max-width: 420px) {
        font-size: 20px;
        line-height: 26px;
        top: 140px;
    }
    `
