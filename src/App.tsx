import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import pagesData from './data/mocks/pages.json';
import pricePlansData from './data/mocks/pricePlans.json';
import productsData from './data/mocks/products.json';
import { EPageTypes } from './types/globalTypes';
import { routes } from './data';
// import './App.css';

function App() {
  const pages = localStorage.getItem(EPageTypes.PAGES);
  const pricePlans = localStorage.getItem(EPageTypes.PRICE_PLANS);
  const products = localStorage.getItem(EPageTypes.PRODUCTS);

  useEffect(() => {
    if (pages && pricePlans && products) {
      return;
    } else {
      localStorage.setItem(EPageTypes.PAGES, JSON.stringify(pagesData));
      localStorage.setItem(
        EPageTypes.PRICE_PLANS,
        JSON.stringify(pricePlansData)
      );
      localStorage.setItem(EPageTypes.PRODUCTS, JSON.stringify(productsData));
    }
  });

  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
