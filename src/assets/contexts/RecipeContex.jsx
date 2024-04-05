/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const initialValue = {
  foodSearch: "",
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "homepage/searchChange":
      return { ...state, foodSearch: action.payload };

    default:
      throw new Error("unknown error");
  }
}

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { foodSearch } = state;

  useEffect(function () {
    try {
        await fetch()
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ foodSearch, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const value = useContext(RecipeContext);
  if (value === undefined)
    throw new Error(
      "You are trying consume context from a component that is not a child component"
    );
  return value;
}

export { RecipeProvider, useRecipe };
