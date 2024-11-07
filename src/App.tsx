import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductsPage";
import { AboutPages } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPages />} />
      </Routes>
    </>
  );
}

export default App;
