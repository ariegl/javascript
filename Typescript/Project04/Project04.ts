/* TYPE INDEXING */

type HeroProperties = {
    isActive: boolean
    address: {
        planet: string
        city: string
    }
}

const addressHero:HeroProperties['address'] = {
    planet: "Mars",
    city: "ASDASD"
}