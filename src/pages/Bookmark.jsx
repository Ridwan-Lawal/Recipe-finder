import { useRecipe } from "../assets/contexts/RecipeContex";

import FoodBlock from "../components/FoodBlock";
import FoodCard from "../components/FoodCard";
import NavBar from "../components/NavBars/NavBar";

function Bookmark() {
  const { bookmarkData, dispatch } = useRecipe();
  return (
    <div>
      <NavBar />
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-semibold px-8 mt-4">
        Bookmark
      </h2>
      <FoodBlock>
        {Object.keys(bookmarkData).length === 0 ? (
          <p className="no-data-text">No Bookmarks yet!</p>
        ) : (
          bookmarkData?.map((meal) => (
            <FoodCard key={meal.idMeal} meal={meal}>
              <button
                onClick={() =>
                  dispatch({ type: "bookmark/delete", payload: meal.idMeal })
                }
                className="remove-btn"
              >
                Remove
              </button>
            </FoodCard>
          ))
        )}
      </FoodBlock>
    </div>
  );
}

export default Bookmark;
