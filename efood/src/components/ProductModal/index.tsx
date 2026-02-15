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
            <S.Image src={image} alt={title} />

            <S.Content>
            <S.CloseButton onClick={onClose}>×</S.CloseButton>

            <h2>{title}</h2>
            <p>{description}</p>

            <strong>{portion}</strong>

            <S.Button onClick={onAdd}>
                Adicionar ao carrinho - R$ {price.toFixed(2)}
            </S.Button>
            </S.Content>
        </S.Modal>
        </S.Overlay>
    )
    }

    export default ProductModal
