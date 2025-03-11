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
import Gallery from './pages/Gallery';
import { Contact } from './pages/Contact';
import Reservation from './components/Reservation';

export default function App() {
  return (
    <CartProvider>
      <CartDrawer /> {/* Render CartDrawer outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:itemId" element={<ProductDetails />} />
        <Route path="/about" element={<Story />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </CartProvider>
  );
}
