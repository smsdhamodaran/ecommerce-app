// app/product/[id]/page.tsx

import { notFound } from "next/navigation"

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  if (!product) return notFound()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex gap-6 flex-col md:flex-row">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="mt-4 text-lg">${product.price}</p>
          <p className="mt-2 text-gray-800">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
