import * as S from './styles'

type Props = {
    title: string
    description: string
    image: string
    price: number
    portion: string
    onClose: () => void
    onAdd: () => void
}

const ProductModal = ({
    title,
    description,
    image,
    price,
    portion,
    onClose,
    onAdd
}: Props) => {
    return (
        <S.Overlay>
            <S.Modal>
                <S.CloseButton onClick={onClose}>×</S.CloseButton>

                <S.Content>
                    <S.Image src={image} alt={title} />

                    <S.Info>
                        <h2>{title}</h2>

                        <p>{description}</p>

                        <p>{portion}</p>

                        <S.Button onClick={onAdd}>
                            Adicionar ao carrinho - R$ {price.toFixed(2)}
                        </S.Button>
                    </S.Info>
                </S.Content>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProductModal