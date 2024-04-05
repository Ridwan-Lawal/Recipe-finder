import { useRecipe } from "../assets/contexts/RecipeContex";
import FoodBlock from "../components/Homepage/FoodBlock";
import NavBar from "../components/NavBars/NavBar";

function Homepage() {
  const { foodSearch, dispatch } = useRecipe();
  return (
    <div>
      <NavBar
        value={foodSearch}
        onChange={(e) =>
          dispatch({ type: "homepage/searchChange", payload: e.target.value })
        }
      />
      <FoodBlock />
    </div>
  );
}

export default Homepage;
