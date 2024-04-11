import { useNavigate } from "react-router-dom";
import { useRecipe } from "../assets/contexts/RecipeContex";
import FoodBlock from "../components/FoodBlock";
import FoodCard from "../components/FoodCard";
import NavBar from "../components/NavBars/NavBar";

function Favourite() {
  const { favouriteData, dispatch, foodSearch, getFoodRecipes } = useRecipe();
  const navigate = useNavigate();

  return (
    <div>
      <NavBar
        value={foodSearch}
        searchRecipes={getFoodRecipes}
        onChange={(e) => {
          dispatch({ type: "homepage/searchChange", payload: e.target.value });
        }}
        onClick={() => navigate("/")}
      />
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold px-8 mt-4">
        Favourites
      </h2>

      {Object.keys(favouriteData).length === 0 && (
        <p className="no-data-text">No Bookmarks yet!</p>
      )}
      {favouriteData?.meals?.map((meal) => console.log(meal))}
      <FoodBlock>
        {favouriteData?.map((meal) => (
          <FoodCard key={meal.idMeal} meal={meal}>
            <button
              onClick={() =>
                dispatch({ type: "favourite/delete", payload: meal.idMeal })
              }
              className="remove-btn"
            >
              Remove
            </button>
          </FoodCard>
        ))}
      </FoodBlock>
    </div>
  );
}

export default Favourite;
