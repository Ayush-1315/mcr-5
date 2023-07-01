import { useParams } from "react-router"
import { useRecipie } from "../../context/dataContext";
export const Recipie=()=>{
    const {recipieId}=useParams();
    const {initalRecipie}=useRecipie()
    const findRecipie=initalRecipie.recipies.find(({_id})=>_id===recipieId)
    

    return <div style={{padding:"1rem"}}>
    <h1>{findRecipie?.recipie}</h1>
    <div style={{display:"flex"}}>
    <img src={findRecipie?.recipieImage} alt="recipie" style={{height:"20rem"}}/>
    <div>
        <h2>Cuisine:{findRecipie?.cusineType}</h2>
        <b>Ingredients:</b>{findRecipie?.ingredients.map((item,index)=><span key={index}>{item},</span>)}
        <ol>{findRecipie?.instructions.map((instruction,index)=><li key={index}>{instruction}</li>)}</ol>
    </div>
    </div>
    </div>
}