// Importa o Header
import Header from '../../components/Header'

// Importa o Footer
import Footer from '../../components/Footer'

// Importa o Card de restaurante
import RestaurantCard from '../../components/RestaurantCard'

// Imagem usada nos cards
import heroImage from '../../assets/Hero.png'

// =====================
// TIPAGEM DO RESTAURANTE
// =====================
type Restaurant = {
    id: number
    title: string
    description: string
    image: string
    tag: string
    rating: number
}

// =====================
// MOCK DE RESTAURANTES
// =====================
const restaurants: Restaurant[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description:
            'Peça já o melhor da culinária japonesa no conforto da sua casa.',
        image: heroImage,
        tag: 'Destaque da semana',
        rating: 4.9
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você.',
        image: heroImage,
        tag: 'Italiana',
        rating: 4.6
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description:
            'Desfrute de massas caseiras e risotos deliciosos.',
        image: heroImage,
        tag: 'Italiana',
        rating: 4.6
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description:
            'Entrega rápida, pratos bem embalados e sabor inesquecível.',
        image: heroImage,
        tag: 'Italiana',
        rating: 4.6
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description:
            'Culinária italiana tradicional com ingredientes selecionados.',
        image: heroImage,
        tag: 'Italiana',
        rating: 4.6
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description:
            'Uma experiência gastronômica inesquecível.',
        image: heroImage,
        tag: 'Italiana',
        rating: 4.6
    }
]

// =====================
// COMPONENTE HOME
// =====================
const Home = () => {
    return (
        <>
            {/* HEADER */}
            <Header />

            {/* LISTA DE RESTAURANTES */}
            <section
                style={{
                    backgroundColor: '#FFF8F2',
                    padding: '80px 0'
                }}
            >
                <div
                    style={{
                        maxWidth: '1024px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '80px'
                    }}
                >
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            title={restaurant.title}
                            description={restaurant.description}
                            image={restaurant.image}
                            tag={restaurant.tag}
                            rating={restaurant.rating}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER (ESTAVA FALTANDO) */}
            <Footer />
        </>
    )
}

export default Home
