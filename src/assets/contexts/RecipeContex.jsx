/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const initialValue = {
  foodSearch: "",
  status: null,
  foodData: {},
  bookmarkData: [],
  favouriteData: [],
  errorMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "homepage/searchChange":
      return { ...state, foodSearch: action.payload };

    case "data/loading":
      return { ...state, status: "loading" };

    case "data/ready":
      return { ...state, foodData: action.payload, status: "ready" };

    case "data/failed":
      return { ...state, status: "error", errorMessage: action.payload };

    case "favourite/add":
      return {
        ...state,
        favouriteData: [...state.favouriteData, action.payload],
      };

    case "favourite/delete":
      return {
        ...state,
        favouriteData: state.favouriteData.filter(
          (food) => food.idMeal !== action.payload
        ),
      };

    case "bookmark/add":
      return {
        ...state,
        bookmarkData: [...state.bookmarkData, action.payload],
      };

    case "bookmark/delete":
      return {
        ...state,
        bookmarkData: state.bookmarkData.filter(
          (food) => food.idMeal !== action.payload
        ),
      };

    case "search/submit":
      return { ...state, foodSearch: "" };

    case "storage/data":
      return action.payload;

    default:
      throw new Error("unknown error");
  }
}

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const {
    foodSearch,
    foodData,
    favouriteData,
    bookmarkData,
    errorMessage,
    status,
  } = state;

  async function getFoodRecipes() {
    dispatch({ type: "data/loading" });
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
      );

      if (!res.ok) throw new Error("Something went wrong getting recipes!");
      const data = await res.json();
      dispatch({ type: "data/ready", payload: data });
      if (!data.meals)
        throw new Error(
          "Couldn't find the food you were trying to look for! ☹"
        );
      console.log(data);
    } catch (err) {
      if (err.name === "AbortError") return;

      dispatch({ type: "data/failed", payload: err.message });
    }
  }

  // effect for storing data into local storage
  useEffect(
    function () {
      if (state !== initialValue) {
        localStorage.setItem("recipeAppState", JSON.stringify(state));
      }
    },
    [state]
  );

  function getData() {
    const storedData = JSON.parse(localStorage.getItem("recipeAppState"));
    if (storedData) dispatch({ type: "storage/data", payload: storedData });
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        foodSearch,
        dispatch,
        foodData,
        favouriteData,
        bookmarkData,
        getFoodRecipes,
        errorMessage,
        status,
      }}
    >
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
