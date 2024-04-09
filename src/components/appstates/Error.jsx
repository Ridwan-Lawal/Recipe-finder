import { useRecipe } from "../../assets/contexts/RecipeContex";

function Error() {
  const { errorMessage } = useRecipe();
  return (
    <div className="text-2xl font-semibold text-gray-700 text-center mt-44 px-8">
      {errorMessage}
    </div>
  );
}

export default Error;
