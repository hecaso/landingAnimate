
export const cards = [
    'Junior',
    'Cali',
    'real-madrid',
    'liverpool',
    'millonarios',
    'union-magdalena',
    'reiver-plate',
    'fluminense'
]

function ItemsCards() {
    return (
        cards.map((escudo, index) => {
            return (
                <li key={index} className={`w-20 ${escudo} aspect-[3/4] flex justify-center items-center rounded text-xl`}>
                    Cardas
                </li>
            )
        })
    )
}

export default ItemsCards;
