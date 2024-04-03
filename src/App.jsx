import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Recipe from "./pages/Recipe";
import Favourite from "./pages/Favourite";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="font-kumbh">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="recipe/:foodId" element={<Recipe />} />
          <Route path="favourites" element={<Favourite />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
