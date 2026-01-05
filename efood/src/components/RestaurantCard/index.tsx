    import * as S from './styles'

    type Props = {
    title: string
    description: string
    image: string
    tag: string
    rating: number
    }

    const RestaurantCard = ({
    title,
    description,
    image,
    tag,
    rating
    }: Props) => {
    return (
        <S.Card>
        <S.ImageWrapper>
            <S.Image src={image} alt={title} />
            <S.Tag>{tag}</S.Tag>
        </S.ImageWrapper>

        <S.Content>
            <S.Header>
            <S.Title>{title}</S.Title>

            <S.Rating>
                {rating}
                <span>⭐</span>
            </S.Rating>
            </S.Header>

            <S.Description>{description}</S.Description>

            <S.Button>Saiba mais</S.Button>
        </S.Content>
        </S.Card>
    )
    }

    export default RestaurantCard
