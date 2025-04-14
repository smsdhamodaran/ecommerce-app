export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain"
      />
      <h3 className="text-md font-semibold mt-2 truncate">{product.title}</h3>
      <p className="text-sm text-gray-600 truncate">{product.category}</p>
      <p className="font-bold mt-1">${product.price}</p>
    </div>
  )
}
