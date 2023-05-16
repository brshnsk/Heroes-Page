import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
  
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if(!validPublisher.includes(publisher)) throw new Error('No existe el publisher');

    return heroes.filter( heroes => heroes.publisher === publisher)
}