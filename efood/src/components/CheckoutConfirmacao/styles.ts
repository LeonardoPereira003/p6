import styled from 'styled-components'

// Camada de fundo escura que cobre toda a tela quando o painel está aberto.
// Fica fixa na viewport para bloquear interação com o conteúdo atrás.
export const Overlay = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.8);
z-index: 999;
`

// Container lateral fixo (ex: painel ou carrinho).
// Posicionado à direita ocupando toda a altura da tela.
export const Container = styled.aside`
position: fixed;
top: 0;
right: 0;

width: 360px;
height: 100vh;

background-color: #e66767;
padding: 32px 16px;

color: #ffe8d9;
display: flex;
flex-direction: column;

// Título principal do painel
h2 {
    font-size: 18px;
    margin-bottom: 24px;
}

// Parágrafos de descrição ou instruções
p {
    font-size: 14px;
    color: #ffe8d9;
    line-height: 22px;
    margin-bottom: 16px;
}

// Botão principal do painel.
// margin-top: auto empurra o botão para o final do container.
button {
    margin-top: auto;
    background-color: #ffe8d9;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: 700;
    cursor: pointer;
}
`