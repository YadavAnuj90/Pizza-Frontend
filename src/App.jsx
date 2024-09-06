import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import Denide from "./Pages/Denide";
import AddProduct from "./Pages/Admin/Addproduct";
import ProductDetails from "./Pages/Products/ProductDetails";

function App() {
  return (
   <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/denide" element={<Denide />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />

      <Route path="/admin/addProduct" element={<AddProduct />} />
      <Route path="/product/:productId"  element= {<ProductDetails />}  />
      <Route path="*" element={<NotFound />} />

     </Routes>


   </>
  )
}

export default App;
