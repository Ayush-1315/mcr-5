import { useState } from "react";

export const RecipieForm = ({initialdata={recipie:"",recipieImage:"",cusineType:"",instructions:[],ingredients:[]},onSubmit}) => {
  const [formData, setFormData] = useState({...initialdata });
  const [inputValue, setInputValue] = useState(formData?.ingredients?.join(';'));
  const [instructionsValue,setInstructions]=useState(formData?.instructions?.join(';'));
  const changeHandle = (type, value) =>
    setFormData((prev) => ({ ...prev, [type]: value }));
  const ingredientHandler = (e) => {
    e.preventDefault();
    const ingredients = inputValue.split(";");
    changeHandle("ingredients", ingredients);
  };
  const instructionHandler = (e) => {
    e.preventDefault();
    const instructions = instructionsValue.split(";");
    changeHandle("instructions", instructions);
  };
  console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="recipieImage">Image</label>
        <input
          type="text"
          defaultValue={formData?.recipieImage}
          placeholder="add URL"
          id="recipieImage"
          onChange={(e) => changeHandle("recipieImage", e.target.value)}
        />
        <label htmlFor="recipieTitle">Recipie Name</label>
        <input
          type="text"
          defaultValue={formData?.recipie}
          id="recipieTitle"
          placeholder="Recipie Title"
          onChange={(e) => changeHandle("recipie", e.target.value)}
        />
        <label htmlFor="cusine">Cusine</label>
        <input
          type="text"
          id="cuisine"
          defaultValue={formData?.cusineType}
          placeholder="Cuisne Type"
          onChange={(e) => changeHandle("cusineType", e.target.value)}
        />
        <label htmlFor="ingredients">
          Ingredients, (Add ';' after every ingredient)
        </label>
        <input
          type="text"
          id="ingredients"
          placeholder="Add Ingredient"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
          <button onClick={ingredientHandler}>Add Ingredients</button>
          <label htmlFor="instructions">
          Instructions, (Add ';' after every ingredient)
        </label>
        <textarea
          name="instructions"
          id="instructions"
          cols="30"
          rows="10"
          value={instructionsValue}
          placeholder="Add Instructions"
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
        <button onClick={instructionHandler}>Add Instructions</button>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};
