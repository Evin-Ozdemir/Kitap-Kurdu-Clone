import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Category from "./pages/category";
import Header from "./components/header";
import Footer from "./components/footer";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ürünler" element={<Product />} />
          {/* Nested Routes */}
          <Route path="/kategori" element={<Category />}>
            <Route path="hikaye" element={<h1>Hikaye Sayfası</h1>} />
            <Route path="roman" element={<h1>Roman Sayfası</h1>} />
          </Route>
          <Route path="/detay/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
