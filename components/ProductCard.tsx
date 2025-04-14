"use client"

import { useCart } from "../context/CartContext"

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-xl p-4 shadow-md flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-md font-semibold truncate">{product.title}</h3>
      <p className="text-sm text-gray-600 truncate">{product.category}</p>
      <p className="font-bold mt-1">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}
