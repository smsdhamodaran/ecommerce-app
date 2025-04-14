"use client"

import { useCart } from "../../context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
