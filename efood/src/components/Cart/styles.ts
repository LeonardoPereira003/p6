import styled from 'styled-components'

// Camada escura que cobre toda a tela quando o carrinho está aberto.
// Fica fixa na viewport e com z-index alto para sobrepor o conteúdo.
export const Overlay = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.8);
z-index: 999;
`

// Container lateral do carrinho.
// Fica fixo à direita ocupando toda a altura da tela.
export const CartContainer = styled.aside`
position: fixed;
top: 0;
right: 0;

width: 360px;
height: 100vh;

background-color: #e66767;

display: flex;
flex-direction: column;
`

// Área clicável para fechar o carrinho.
// Posicionada no canto superior direito do container.
export const CloseArea = styled.span`
position: absolute;
top: 10px;
right: 16px;

color: #fff;
font-size: 20px;
cursor: pointer;
`

// Lista de itens do carrinho.
// Remove marcadores da lista e permite rolagem vertical.
export const Items = styled.ul`
list-style: none;
padding: 32px 16px 0 16px;
overflow-y: auto;
`

// Item individual do carrinho.
// Layout em linha com imagem, informações e botão de remover.
export const Item = styled.li`
background-color: #ffe8d9;
padding: 8px;
margin-bottom: 16px;

display: flex;
gap: 8px;
align-items: center;

// Estilo da imagem do produto
img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

// Container das informações do produto
div {
    flex: 1;

    // Nome do produto
    h4 {
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    margin-bottom: 8px;
    }

    // Preço ou informação adicional
    span {
    font-size: 14px;
    font-weight: 700;
    color: #e66767;
    }
}

// Botão de remover item
button {
    background: none;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    // Ícone dentro do botão
    img {
    width: 16px;
    height: 16px;
    }
}
`

// Área de resumo do carrinho (total e botão de ação).
export const Summary = styled.div`
padding: 16px;
border-top: 1px solid rgba(255, 255, 255, 0.4);

// Linha que mostra o total
div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    span {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    }
}

// Botão principal (ex: continuar ou finalizar compra)
button {
    width: 100%;
    background-color: #ffe8d9;
    color: #e66767;
    border: none;
    padding: 8px;
    font-weight: 700;
    cursor: pointer;
}
`