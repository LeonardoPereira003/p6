    import styled from 'styled-components'

    /*
    ============================
    CARD DO RESTAURANTE (HOME)
    ============================

    Ajustes aplicados:
    ✔ Estrutura original preservada
    ✔ Cores mantidas (fiéis ao Figma)
    ✔ Padding interno exatamente como no Figma (16px)
    ✔ Altura mínima definida conforme Figma (398px)
    → evita espaços estranhos com textos menores
    ✔ Nenhuma alteração estrutural ou de lógica
    */

    export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;

    /* Altura mínima conforme Figma (melhor comportamento com dados reais) */
    min-height: 398px;

    display: flex;
    flex-direction: column;

    /* Espaçamento externo entre os cards */
    margin-bottom: 32px;

    overflow: hidden;
    `

    export const ImageWrapper = styled.div`
    position: relative;
    `

    export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
    background-color: #f2f2f2;

    @media (max-width: 768px) {
        height: 180px;
    }
    `

    export const Tag = styled.span`
    position: absolute;
    top: 20px; /* Conforme Figma */
    right: 16px;

    background-color: #e66767;
    color: #ffffff;

    font-size: 12px;
    font-weight: 700;
    padding: 4px 6px;

    @media (max-width: 768px) {
        font-size: 11px;
        padding: 4px 5px;
    }
    `

    export const Content = styled.div`
    /* Padding exatamente como no Figma */
    padding: 16px;

    flex: 1;
    display: flex;
    flex-direction: column;
    `

    export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    `

    export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;

    @media (max-width: 768px) {
        font-size: 16px;
    }
    `

    export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 700;
    color: #e66767;

    @media (max-width: 768px) {
        font-size: 13px;
    }
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: #4b4b4b;

    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 13px;
        line-height: 20px;
    }
    `

    export const Button = styled.button`
    margin-top: auto;
    align-self: flex-start;

    background-color: #e66767;
    color: #ffffff;

    border: none;
    padding: 6px 12px;

    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        font-size: 13px;
        padding: 6px 10px;
    }
    `
