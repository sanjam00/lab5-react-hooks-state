import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only). **Originally in this module, but moved it to App as it seemed like the data was needed for other components (like Cart.jsx)
// export const sampleProducts = [
//   { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
//   { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
// ]

const ProductList = ({ handleCart, displayItems }) => {
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {displayItems.length === 0 ? (
        <p>No products available</p>
      ) : (
        displayItems.map((product) => (
          <ProductCard key={product.id} product={product} handleCart={handleCart} />
        ))
      )}

    </div>
  )
}

export default ProductList
