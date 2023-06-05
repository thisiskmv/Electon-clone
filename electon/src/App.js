import AllRoutes from "./Routes/AllRoutes";
import ProductDetail from "./Component/ProductDetail";
import Product from "./Component/pages/Product"
import Header from "./Component/Header";
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import Cart from "./Component/pages/Cart";
// import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">

      {/* <Cart/> */}
<Header/>
<Navbar/>
    <AllRoutes />


    {/* <Footer/> */}
    


    </div>
  );
}

export default App;
