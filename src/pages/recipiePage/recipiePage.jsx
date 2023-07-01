import { useParams } from "react-router"
import { useRecipie } from "../../context/dataContext";
export const Recipie=()=>{
    const {recipieId}=useParams();
    const {recipies}=useRecipie()
    const findRecipie=recipies.find(({_id})=>_id===recipieId)
    console.log(findRecipie)

    return <>Recipie Here</>
}