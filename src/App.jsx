import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { RecipeProvider } from "./assets/contexts/RecipeContex";
import Loader from "./components/appstates/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Recipe = lazy(() => import("./pages/Recipe"));
const Favourite = lazy(() => import("./pages/Favourite"));
const Bookmark = lazy(() => import("./pages/Bookmark"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <div className="font-kumbh pb-14">
      <RecipeProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="recipe/:foodId" element={<Recipe />} />
              <Route path="favourites" element={<Favourite />} />
              <Route path="bookmark" element={<Bookmark />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </RecipeProvider>
    </div>
  );
}

export default App;
