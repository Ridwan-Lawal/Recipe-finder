/* eslint-disable react/prop-types */
import {
  PiBookmarkBold,
  PiBookmarkFill,
  PiHeartBold,
  PiHeartFill,
} from "react-icons/pi";
import { useRecipe } from "../assets/contexts/RecipeContex";

function AddDeleteFood({ meal, font }) {
  const { dispatch, favouriteData, bookmarkData } = useRecipe();

  return (
    <>
      {favouriteData?.find((food) => food.idMeal === meal.idMeal) ? (
        <PiHeartFill
          onClick={() =>
            dispatch({ type: "favourite/delete", payload: meal.idMeal })
          }
          className={`${font}`}
        />
      ) : (
        <PiHeartBold
          onClick={() => dispatch({ type: "favourite/add", payload: meal })}
          className={`foodcard-icons ${font}`}
        />
      )}

      {bookmarkData?.find((food) => food.idMeal === meal.idMeal) ? (
        <PiBookmarkFill
          onClick={() =>
            dispatch({
              type: "bookmark/delete",
              payload: meal.idMeal,
            })
          }
          className={` ${font}`}
        />
      ) : (
        <PiBookmarkBold
          onClick={() => dispatch({ type: "bookmark/add", payload: meal })}
          className={`foodcard-icons ${font}`}
        />
      )}
    </>
  );
}

export default AddDeleteFood;
