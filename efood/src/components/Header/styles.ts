    import styled from 'styled-components'

    /*
    ============================
    HEADER / HERO - HOME
    ============================

    Este container representa o Hero da página Home,
    conforme especificado no Figma.

    - Altura fixa no desktop (384px), conforme layout original
    - Background com cor base + vector exportado do Figma
    - Position relative para permitir posicionamento absoluto
        do logo e do texto central
    */
    export const Container = styled.header`
    width: 100%;
    height: 384px;

    /* Cor base do Hero conforme Figma */
    background-color: #ffebd9;

    /*
        Vector do Figma exportado como imagem
        - repeat-x para manter o padrão horizontal
        - position ajustada para alinhar corretamente o desenho
        - size proporcional à altura do container
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

        Ajustes feitos para manter proporção visual
        sem quebrar o layout em telas menores
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

    Logo posicionada de forma absoluta,
    centralizada horizontalmente conforme Figma
    */
    export const Logo = styled.img`
    width: 125px;
    height: auto;

    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);

    /*
        Responsividade:
        - Reduz tamanho da logo
        - Ajusta distância do topo
    */
    @media (max-width: 768px) {
        width: 96px;
        top: 32px;
    }
    `

    /*
    ============================
    TEXTO PRINCIPAL DO HERO
    ============================

    Texto central do banner da Home,
    exatamente conforme tipografia do Figma
    */
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

    /*
        Ajustes para tablet
        - Reduz fonte
        - Ajusta espaçamento vertical
    */
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 28px;
        top: 140px;
        max-width: 90%;
    }

    /*
        Ajustes para telas muito pequenas
        (smartphones menores)
    */
    @media (max-width: 420px) {
        font-size: 20px;
        line-height: 26px;
        top: 130px;
    }
    `
