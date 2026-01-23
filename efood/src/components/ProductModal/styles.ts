    import styled from 'styled-components'

    /*
    ============================
    OVERLAY
    ============================
    Fundo escuro que cobre a tela inteira
    */
    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    /*
    ============================
    MODAL CONTAINER
    ============================
    */
    export const Modal = styled.div`
    background-color: #e66767;
    width: 1024px;
    max-width: 95%;
    max-height: 90vh;

    display: flex;
    position: relative;
    overflow: hidden;

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
    }
    `

    /*
    ============================
    BOTÃO FECHAR
    ============================
    */
    export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;

    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    z-index: 10;
    `

    /*
    ============================
    IMAGEM
    ============================
    */
    export const Image = styled.img`
    width: 50%;
    object-fit: cover;

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
        width: 100%;
        height: 240px;
    }
    `

    /*
    ============================
    CONTEÚDO
    ============================
    */
    export const Content = styled.div`
    width: 50%;
    padding: 32px;
    color: #fff;

    display: flex;
    flex-direction: column;
    gap: 16px;

    overflow-y: auto;

    /* 🔥 MOBILE */
    @media (max-width: 768px) {
        width: 100%;
        padding: 24px 16px;
    }
    `

    export const Title = styled.h3`
    font-size: 18px;
    font-weight: 900;
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    `

    export const Portion = styled.span`
    font-size: 14px;
    font-weight: 700;
    `

    export const Button = styled.button`
    margin-top: auto;

    background-color: #fff;
    color: #e66767;
    border: none;

    padding: 8px;
    font-weight: 700;
    cursor: pointer;
    `
