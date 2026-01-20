    import styled from 'styled-components'

    export const Container = styled.header`
    width: 100%;
    height: 384px;

    /* Cor base do Hero */
    background-color: #ffebd9;

    /* Vector do Figma */
    background-image: url('/hero-bg.png');
    background-repeat: repeat-x;
    background-position: center -24px;
    background-size: auto 384px;

    position: relative;

    /* ================= MOBILE ================= */
    @media (max-width: 768px) {
        height: 260px;
        background-size: auto 260px;
        background-position: center -16px;
    }
    `

    /* Logo central */
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

    /* Texto principal */
    export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    color: #e66767;

    text-align: center;
    max-width: 640px;

    position: absolute;
    top: 210px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 28px;
        top: 140px;
        max-width: 90%;
    }

    @media (max-width: 420px) {
        font-size: 20px;
        line-height: 26px;
        top: 130px;
    }
    `
