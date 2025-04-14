"use client"

import { useState } from "react"
import ProductCard from "../../components/ProductCard"

export default function SearchPage() {
  const [query, setQuery] = useState("")  // State to hold the search query
  const [results, setResults] = useState<any[]>([]) // State to hold filtered products
  const [loading, setLoading] = useState(false) // Loading state

  const handleSearch = async () => {
    if (!query) return  // Don't search if the query is empty
    setLoading(true)

    try {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      const filtered = data.filter((product: any) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered) // Set the filtered results
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false) // Stop loading
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Products</h1>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product name..."
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Search
      </button>

      {/* Loading Spinner */}
      {loading && <div>Loading...</div>}

      {/* Display Search Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {results.length === 0 && !loading ? (
          <p>No results found</p>
        ) : (
          results.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}
