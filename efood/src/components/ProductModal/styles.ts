    import styled from 'styled-components'

    /*
    ============================
    OVERLAY DO MODAL
    ============================

    - Camada escura por cima da página
    - Centraliza o modal na tela
    - Scroll ativado no mobile
    */
    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px;
    z-index: 1000;
    `

    /*
    ============================
    MODAL PRINCIPAL
    ============================

    - Layout em duas colunas no desktop
    - Layout em coluna única no mobile
    */
    export const Modal = styled.div`
    background-color: #e66767;
    color: #fff;

    max-width: 1024px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    padding: 32px;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 16px;
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

    font-size: 20px;
    cursor: pointer;
    `

    /*
    ============================
    IMAGEM DO PRODUTO
    ============================

    - Sempre visível
    - Não estoura no mobile
    */
    export const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 360px;
    object-fit: cover;
    `

    /*
    ============================
    CONTEÚDO TEXTUAL
    ============================
    */
    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    `

    export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
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
