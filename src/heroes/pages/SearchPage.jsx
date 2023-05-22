import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import {getHeroesByName} from "../helpers"
import { HeroesCard } from "../components/HeroesCard";



export const SearchPage = () => {

  
  const navigate = useNavigate()
  const location = useLocation();
  
  const { q = ''} = queryString.parse( location.search );
  
  const { searchText, onInputChange,
    onResetForm,} = useForm({
    searchText: ''
  })
  const heroes = getHeroesByName(q)


  const onSearchSubmit = (event) => {
    event.preventDefault();

    if(searchText.trim().length < 1 ) return;
    
    navigate(`?q=${ searchText }`)
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          {heroes.length < 1 && (
            <div>
              <h4 className="fw-normal">Searching...</h4>
              <hr />
            </div>
          )}
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {(!q) && (
            <div className="alert alert-info">Search a hero</div>
            
          )} 
          {(heroes.length < 1  && q) && <div className="alert alert-danger">No hero with <b>{q}</b></div>}
          
          {
          heroes.map( hero => (
            <HeroesCard key={hero.id} {...hero}/>
          ))
        }
            
        </div>

        
      </div>
    </>
  );
};
