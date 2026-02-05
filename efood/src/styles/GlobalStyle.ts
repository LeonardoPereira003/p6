    // Importa função para criar estilos globais
    import { createGlobalStyle } from 'styled-components'

    // Estilos globais da aplicação
    export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        /* Fonte definida no Figma */
        font-family: 'Roboto', sans-serif;

        /* Figma usa fundo branco como base */
        background-color: #FFFFFF;

        /* Cor padrão de texto mais escura, conforme layout */
        color: #333333;

        /* Peso padrão do texto no Figma */
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    `
