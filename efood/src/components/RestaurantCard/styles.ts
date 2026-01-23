    import styled from 'styled-components'

    /*
    ============================
    CARD DO RESTAURANTE (HOME)
    ============================

    Representa cada restaurante listado na Home.
    O layout segue exatamente o Figma:

    - Card com borda vermelha
    - Imagem no topo
    - Conteúdo flexível
    - Botão alinhado corretamente na base
    */
    export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;

    /*
        Flex em coluna permite:
        - Conteúdo crescer
        - Botão ficar sempre no final
    */
    display: flex;
    flex-direction: column;

    /* Garante que nada ultrapasse o card */
    overflow: hidden;
    `

    /*
    ============================
    WRAPPER DA IMAGEM
    ============================

    Usado para permitir posicionar a tag
    (ex: "Italiana") sobre a imagem
    */
    export const ImageWrapper = styled.div`
    position: relative;
    `

    /*
    ============================
    IMAGEM DO RESTAURANTE
    ============================

    - Altura fixa conforme Figma
    - object-fit: cover evita distorção
    - display: block remove espaços indesejados
    */
    export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;

    /* Cor de fallback caso a imagem falhe */
    background-color: #f2f2f2;

    /*
        ============================
        RESPONSIVO
        ============================

        Reduz altura da imagem em telas menores
        mantendo proporção visual
    */
    @media (max-width: 768px) {
        height: 180px;
    }
    `

    /*
    ============================
    TAG DO RESTAURANTE
    ============================

    Exemplo: "Italiana", "Japonesa"
    Posicionada no canto superior direito
    da imagem, conforme Figma
    */
    export const Tag = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;

    background-color: #e66767;
    color: #ffffff;

    font-size: 12px;
    font-weight: 700;
    padding: 4px 6px;
    `

    /*
    ============================
    CONTEÚDO DO CARD
    ============================

    Usa flex para:
    - Texto crescer
    - Botão ficar sempre no final
    */
    export const Content = styled.div`
    padding: 16px; /* Espaçamento do Figma */

    flex: 1;
    display: flex;
    flex-direction: column;
    `

    /*
    ============================
    CABEÇALHO (TÍTULO + NOTA)
    ============================
    */
    export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    `

    /* Nome do restaurante */
    export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    `

    /* Nota + estrela */
    export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 700;
    color: #e66767;
    `

    /*
    ============================
    DESCRIÇÃO DO RESTAURANTE
    ============================
    */
    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    /* Cor corrigida conforme Figma */
    color: #4b4b4b;

    margin-bottom: 16px;
    `

    /*
    ============================
    BOTÃO "SAIBA MAIS"
    ============================

    margin-top: auto:
    - Empurra o botão para o final do card
    - Mantém alinhamento consistente entre cards
    */
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
    `
