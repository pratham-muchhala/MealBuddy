import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import PopUp from "./pages/PopUp";
import PopUp1 from "./pages/PopUp1";
import AddRecipe from "./pages/AddRecipe";
import ViewUploadedRecipe from "./pages/ViewUploadedRecipe";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/recipe":
        title = "";
        metaDescription = "";
        break;
      case "/popup":
        title = "";
        metaDescription = "";
        break;
      case "/popup1":
        title = "";
        metaDescription = "";
        break;
      case "/addrecipe":
        title = "";
        metaDescription = "";
        break;
        case "/searchrecipe":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/popup" element={<PopUp />} />
      <Route path="/popup1" element={<PopUp1 />} />
      <Route path="/addrecipe" element={<AddRecipe />} />
      <Route path="/searchrecipe" element={<ViewUploadedRecipe />} />
    </Routes>
  );
}
export default App;
