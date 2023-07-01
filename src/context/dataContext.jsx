import {v4 as uuid} from "uuid";
import { createContext,useContext, useEffect, useReducer} from "react";
import { initialState, reducerFun } from "../reducer/recipieReducer";
const RecipieContext=createContext();
export const RecipieProvider=({children})=>{
const [initalRecipie,recipieDispatch]=useReducer(reducerFun,initialState);
    useEffect(()=>{
        if(localStorage.getItem("recipie")===null ){
            localStorage.setItem("recipie",JSON.stringify(initalRecipie?.recipies))

        }
        else 
        recipieDispatch({type:"SET_RECIPIE",payload:JSON.parse(localStorage.getItem("recipie"))})
        // eslint-disable-next-line
    },[])
    // const [allRecipies,setAllRecipies]=useState(JSON.parse(localStorage.getItem("recipie"))?? recipies);
const addNewRecipie=(data)=>{
    const seetingData={_id:uuid(),...data}
    const oldData=JSON.parse(localStorage.getItem("recipie"));
    localStorage.removeItem("recipie");
    // setAllRecipies([...oldData,seetingData]);
    recipieDispatch({type:"ADD_RECIPIE",payload:data})
    localStorage.setItem("recipie",JSON.stringify([...oldData,seetingData]));
}
const deleteRcipie=(id)=>{
    const data=JSON.parse(localStorage.getItem("recipie"));
    localStorage.removeItem("recipie");
    // setAllRecipies(data?.filter(({_id})=>_id!==id))
    recipieDispatch({type:"REMOVE_RECIPIE",payload:id})
    localStorage.setItem("recipie",JSON.stringify(data.filter(({_id})=>_id!==id)))
}
    return <RecipieContext.Provider value={{initalRecipie,addNewRecipie,deleteRcipie,recipieDispatch}}>{children}</RecipieContext.Provider>
}
export const useRecipie=()=>useContext(RecipieContext);