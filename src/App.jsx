import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.css'
import { Alert } from '@mui/material'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(true);

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  function handleCart(product) {
    console.log("Item is in your cart", product.name)
    setCart(prev => [...prev, product])
  }

  // TODO: Implement state for category filtering
  const [displayItems, setDisplayItems] = useState(sampleProducts);
  // const filteredProducts = filter
  //   ? sampleProducts.filter((p) => p.category === filter)
  //   : sampleProducts;

  function changeFilter(filter) {
    const newList = sampleProducts.filter((item) => {
      if (filter === "All") return true;

      return item.category === filter;
    })
    setDisplayItems(newList);
    console.log(newList)
  }

  // const displayItems = sampleProducts.filter((item) => {
  //   if (filter === "All") return true;

  //   return item.category === filter;
  // })

  return (
    <div className={darkMode ? "inDarkMode" : "inLightMode"}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => changeFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>

      <ProductList handleCart={handleCart} displayItems={displayItems} />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} sampleProducts={sampleProducts} />
    </div>
  )
}

export default App
