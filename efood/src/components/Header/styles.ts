    import styled from 'styled-components'

    export const Container = styled.header`
    width: 100%;
    height: 384px;

    /* Cor base do Hero (fica atrás do vector) */
    background-color: #ffebd9;

    /*
        Vector EXATO do Figma
        (imagem exportada, sem recriar SVG)
    */
    background-image: url('/hero-bg.png');
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    position: relative;
    `

    /* Logo no topo */
    export const Logo = styled.img`
    width: 125px;
    height: auto;

    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    `

    /* Texto mais abaixo */
    export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    color: #e66767;

    text-align: center;
    max-width: 640px;

    position: absolute;
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
    `
