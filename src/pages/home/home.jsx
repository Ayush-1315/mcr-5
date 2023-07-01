import { useEffect, useState } from "react";
import { RecipieCard } from "../../components/recipieCard/recipieCard";
import { RecipieForm } from "../../components/recipieForm/recipirForm";
import { useRecipie } from "../../context/dataContext";
import home from "./home.module.css";
import { Filter } from "../../components/recipieFilter/recipieFilter";
export const Home = () => {
  const { addNewRecipie, deleteRcipie, initalRecipie } = useRecipie();
  const [recipies, setRecipies] = useState(initalRecipie?.recipies);
  const [showForm, setShowForm] = useState(false);
  const submitFunction = (data) => {
    addNewRecipie(data);
    setShowForm(false);
  };
  useEffect(() => {
    switch (initalRecipie?.searchBy) {
      case "cusine":
        setRecipies((prev) =>
          prev.filter(({ cusineType }) =>
            cusineType
              .toLowerCase()
              .includes(initalRecipie?.search.toLowerCase())
          )
        );
        break;
        case "ingredients":
        setRecipies(initalRecipie?.recipies.filter(({ ingredients }) =>ingredients.reduce((isContain,curr)=>curr.includes(initalRecipie?.search?.toLowerCase())?true:isContain,false))
        );
        break;
        case "name":
        setRecipies(initalRecipie?.recipies.filter(({ recipie }) =>recipie.toLowerCase().includes(initalRecipie?.search.toLowerCase()))
        );
        break;
        default: setRecipies(initalRecipie?.recipies);
    }
  }, [initalRecipie]);
  return (
    <div style={{ textAlign: "left", margin: "1rem" }}>
      <Filter />
      <div className={home.recipieContainer}>
        {showForm && (
          <div className={home.wrapper}>
            <RecipieForm onSubmit={submitFunction} />
          </div>
        )}
        {recipies?.map((recipie, index) => (
          <RecipieCard
            recipie={recipie}
            key={index}
            onDelete={(id) => deleteRcipie(id)}
          />
        ))}
        <div className={home.addTile} onClick={() => setShowForm(true)}>
          <span className="material-symbols-outlined">add</span>
          Add
        </div>
      </div>
    </div>
  );
};
