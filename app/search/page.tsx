"use client"

import { useState } from "react"
import ProductCard from "../../components/ProductCard"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    const filtered = data.filter((p: any) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Products</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by product name..."
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Search
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {results.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
