import { useRecipe } from "../assets/contexts/RecipeContex";
import AddDeleteFood from "../components/AddDeleteFood";
import FoodBlock from "../components/FoodBlock";
import NavBar from "../components/NavBars/NavBar";
import Error from "../components/appstates/Error";
import Loader from "../components/appstates/Loader";
import FoodCard from "../components/FoodCard";

function Homepage() {
  const { foodSearch, dispatch, getFoodRecipes, status, foodData } =
    useRecipe();
  return (
    <div>
      <NavBar
        searchRecipes={getFoodRecipes}
        value={foodSearch}
        onChange={(e) =>
          dispatch({
            type: "homepage/searchChange",
            payload: e.target.value,
          })
        }
      />
      {!status && (
        <p className="no-data-text">
          Looking for a food recipe? search above ☝
        </p>
      )}
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <FoodBlock>
          {foodData?.meals?.map((meal) => (
            <FoodCard key={meal.idMeal} meal={meal}>
              <AddDeleteFood meal={meal} />
            </FoodCard>
          ))}
        </FoodBlock>
      )}
    </div>
  );
}

export default Homepage;
