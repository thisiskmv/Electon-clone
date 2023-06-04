
import { useSelector } from 'react-redux';
import ColorCheckbox from './Component/ColorCheckbox'
import ProductDetail from './Component/ProductDetail';
import Product from './Component/pages/Product';

function App() {
  // const { theme} = useSelector((store) => {
  //   return store.themeReducer;
  // });
  // console.log(theme)
  return (
    <div className='App'>
     {/* <ProductDetail/> */}

     {/* <ColorCheckbox/> */}
     <Product/>
     
    </div>
  );
}




export default App;
