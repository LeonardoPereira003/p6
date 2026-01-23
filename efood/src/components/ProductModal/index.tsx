import * as S from './styles'
import pizzaImg from '../../assets/pizza.jpg'

type Props = {
    onClose: () => void
    onAdd: () => void
}

/*
============================
COMPONENTE ProductModal
============================

Modal responsável por exibir:
- Imagem do produto
- Nome
- Descrição
- Porção
- Botão de ação

✔ Usa imagem LOCAL (assets)
✔ Não depende de internet
✔ Compatível com Figma
✔ Responsivo
*/
const ProductModal = ({ onClose, onAdd }: Props) => {
    return (
        <S.Overlay>
            <S.Modal>
                {/* Botão de fechar */}
                <S.CloseButton onClick={onClose}>×</S.CloseButton>

                {/* Imagem do produto */}
                <S.Image
                    src={pizzaImg}
                    alt="Pizza Marguerita"
                />

                {/* Conteúdo textual */}
                <S.Content>
                    <S.Title>Pizza Marguerita</S.Title>

                    <S.Description>
                        A clássica Marguerita: molho de tomate suculento,
                        mussarela derretida, manjericão fresco e um toque de azeite.
                    </S.Description>

                    <S.Portion>Serve: 2 pessoas</S.Portion>

                    <S.Button onClick={onAdd}>
                        Adicionar ao carrinho
                    </S.Button>
                </S.Content>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProductModal
