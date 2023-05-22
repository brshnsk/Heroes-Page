import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroesCard } from "./"

export const HeroesList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher), [publisher]);

  return (
    
    <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-3">
        {
          heroes.map((hero) => (
            <HeroesCard key={hero.id}
              {...hero}
            />
        ))
        }
    </div>
  )
}
