export function useGetIngredient(selectedFood) {
  const ingredients = Object.entries(selectedFood || [])
    .filter((p) => p[0].toLowerCase().includes("ingredient"))
    .filter((p) => p[1])
    .map((p) => p[1]);

  return ingredients;
}
