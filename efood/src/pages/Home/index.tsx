    // Hooks do React
    import { useEffect, useState } from 'react'

    // Componentes
    import Header from '../../components/Header'
    import Footer from '../../components/Footer'
    import RestaurantCard from '../../components/RestaurantCard'

    // Estilos da página
    import * as S from './styles'

    // Serviço de API
    import { api } from '../../services/api'

    // Tipagem
    import type { Restaurant } from '../../types/Restaurant'

    /*
    ================================
    COMPONENTE HOME
    ================================

    Responsável por:
    - Exibir o Header
    - Buscar restaurantes da API
    - Renderizar a lista conforme o layout do Figma
    - Exibir o Footer
    */
    const Home = () => {
    /*
        Estado que armazena a lista de restaurantes
        retornada pela API
    */
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    /*
        Executa a requisição assim que a página carrega
    */
    useEffect(() => {
        api
        .get('restaurantes')
        .then((response) => {
            console.log(response.data)
            setRestaurants(response.data)
        })
        .catch((error) => {
            console.error('Erro ao buscar restaurantes:', error)
        })
    }, [])

    return (
        <>
        {/* HEADER DA HOME */}
        <Header />

        {/* SEÇÃO DE RESTAURANTES */}
        <S.Section>
            <S.Container>
            <S.Grid>
                {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    title={restaurant.titulo}
                    description={restaurant.descricao}
                    image={restaurant.capa}
                    tag={restaurant.tipo}
                    rating={restaurant.avaliacao}
                />
                ))}
            </S.Grid>
            </S.Container>
        </S.Section>

        {/* FOOTER */}
        <Footer />
        </>
    )
    }

    export default Home
