import MainHeader from "./components/Layout/MainHeader";

import Cart from "./components/screens/Cart";
import PageNotFound from "./components/screens/PageNotFound";
import Products from "./components/screens/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Products />} />
          <Route path="/Assignment-app-main" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
