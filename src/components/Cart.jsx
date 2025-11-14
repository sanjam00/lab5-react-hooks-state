import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.length === 0
          ? (<p>No items in your cart.</p>)
          : (
            cart.map((p) => (
              <li key={p.id}>{p.name} is in your cart</li>))
          )
        }
      </ul>
    </div>
  )
}

export default Cart
