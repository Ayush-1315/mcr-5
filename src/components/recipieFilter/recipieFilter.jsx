import { useRecipie } from "../../context/dataContext"

export const Filter=()=>{
    const {recipieDispatch}=useRecipie();
    return <div>
        <input type="text" placeholder="Search the item you want" onChange={e=>recipieDispatch({type:"SEARCH",payload:e.target.value})}/>
        <input type="radio" name="filter" id="name" value="name" onChange={e=>recipieDispatch({type:"SEARCH_BY",payload:e.target.value})}/>
        <label htmlFor="name">Name</label>
        <input type="radio" name="filter" id="ingredients" value="ingredients" onChange={e=>recipieDispatch({type:"SEARCH_BY",payload:e.target.value})}/>
        <label htmlFor="ingredients">Ingredients</label>
        <input type="radio" name="filter" id="cusine" value="cusine" onChange={e=>recipieDispatch({type:"SEARCH_BY",payload:e.target.value})}/>
        <label htmlFor="cusine">Cusine</label>
    </div>
}