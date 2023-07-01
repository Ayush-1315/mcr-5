import { useNavigate } from "react-router";
import recipieCardCss from "./recipieCard.module.css";
export const RecipieCard = ({ recipie,onDelete}) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/recipie/${recipie?._id}`);
  const deleteHandler=(e)=>{
    e.preventDefault();
    onDelete(recipie._id);
    console.log("working")
  }
  return (
    <div className={recipieCardCss.card}>
      <div
        className={recipieCardCss.cardHead}
        style={{ backgroundImage: `url(${recipie?.recipieImage})` }}
      >
        <button>
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button onClick={deleteHandler}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className={recipieCardCss.cardBody}  onClick={() => clickHandler()}>
        <p>{recipie?.recipie}</p>
        <div className={recipieCardCss.details}>
          <p>Cusine Type:</p> <span>{recipie?.cusineType}</span>
        </div>
        <div className={recipieCardCss.details}>
          <p>Ingredients:</p> <span>See Recipie {`>`}</span>
        </div>
        <div className={recipieCardCss.details}>
          <p>Instructions:</p> <span>See Recipie {`>`}</span>
        </div>
      </div>
    </div>
  );
};
