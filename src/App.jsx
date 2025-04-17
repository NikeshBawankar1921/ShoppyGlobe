import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

// Lazy loaded pages
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FilterP = lazy(() => import('./pages/FilterP'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/beauty" element={<FilterP categorys="beauty" />} />
            <Route path="/category/fragrances" element={<FilterP categorys="fragrances" />} />
            <Route path="/category/furniture" element={<FilterP categorys="furniture" />} />
            <Route path="/category/groceries" element={<FilterP categorys="groceries" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
