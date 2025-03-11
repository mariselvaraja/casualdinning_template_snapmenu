import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Story } from './pages/Story';
import { Locations } from './pages/Locations';
import { Events } from './pages/Events';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation'; // Import Navigation
import CartDrawer from './components/CartDrawer'; // Import CartDrawer
import { Trash } from 'lucide-react';

export default function App() {
  return (
    <CartProvider>
      {/* <Navigation />  */}
      <CartDrawer /> {/* Render CartDrawer outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:itemId" element={<ProductDetails />} />
        <Route path="/about" element={<Story />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </CartProvider>
  );
}
