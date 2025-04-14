"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import ProductCard from "../components/ProductCard"

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
  export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    const loader = useRef(null);
  
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products?limit=10`);
      const data: Product[] = await res.json();
      setProducts(prev => [...prev, ...data]);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const handleObserver = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          fetchProducts();
        }
      },
      [loading]
    );
  
    useEffect(() => {
      const option = { root: null, rootMargin: "20px", threshold: 1.0 };
      const observer = new IntersectionObserver(handleObserver, option);
      if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div ref={loader} className="text-center mt-6 text-gray-500">
          {loading ? "Loading more products..." : "Scroll to load more"}
        </div>
      </div>
    );
  }
  