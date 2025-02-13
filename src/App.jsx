
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, Routes } from 'react-router-dom';
import LayOut from './LayOut';
import Home from './Home/Home';
import Catalog from './Pages/Catalog/Catalog';
import Sign from './(Auth)/Sign';
import Login from './(Auth)/Login';
import WishList from './(Order)/WishList';
import Cart from './(Order)/Cart';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact-us/Contact';
import Blog from './Pages/Blog/Blog';
import Collection from './Pages/Colliction/Colliction';

function App() {

return (
<>
<Routes>
      <Route path="/" element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/signIn" element={<Sign />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/Faq" element={<FAQ />} />
      <Route path="/Wishlist" element={<WishList />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact-us" element={<Contact />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Collection" element={<Collection />} />
       
       
        
       
      </Route>
    </Routes>

</>
  )
}

export default App
