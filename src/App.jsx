import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Recipe from "./pages/Recipe";
import Favourite from "./pages/Favourite";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import { RecipeProvider } from "./assets/contexts/RecipeContex";

/*


-store the entire app data in the local storage.


*/

function App() {
  return (
    <div className="font-kumbh pb-14">
      <RecipeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="recipe/:foodId" element={<Recipe />} />
            <Route path="favourites" element={<Favourite />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </RecipeProvider>
    </div>
  );
}

export default App;
