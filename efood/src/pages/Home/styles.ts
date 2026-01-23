    import styled from 'styled-components'

    /*
    ================================
    SEÇÃO PRINCIPAL DA HOME
    ================================

    Responsável pelo fundo e espaçamento
    da lista de restaurantes.
    */
    export const Section = styled.section`
    background-color: #fff8f2;
    padding: 80px 0;

    /* Ajuste de espaçamento em telas menores */
    @media (max-width: 768px) {
        padding: 48px 0;
    }
    `

    /*
    ================================
    CONTAINER CENTRAL
    ================================

    - Largura máxima definida pelo Figma (1024px)
    - Centralizado horizontalmente
    - Padding lateral para evitar colar nas bordas no mobile
    */
    export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    `

    /*
    ================================
    GRID DE RESTAURANTES
    ================================

    - Desktop: 2 colunas (conforme Figma)
    - Tablet: 2 colunas com menor espaçamento
    - Mobile: 1 coluna
    */
    export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;

    /* Tablet */
    @media (max-width: 1024px) {
        gap: 48px;
    }

    /* Mobile */
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    `
