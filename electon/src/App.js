import { useSelector } from 'react-redux';
import ColorCheckbox from './Component/ColorCheckbox'
import ProductDetail from './Component/ProductDetail';
import Product from './Component/pages/Product';
import AllRoutes from "./Routes/AllRoutes";
function App() {
  // const { theme} = useSelector((store) => {
  //   return store.themeReducer;
  // });
  // console.log(theme)
  return (
    <div className='App'>
     {/* <ProductDetail/> */}

    <AllRoutes />
    
    </div>
  );
}

export default App;
