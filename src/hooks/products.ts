import { useEffect, useState } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=7");

      const data: IProduct[] = await response.json(); // Парсим JSON из ответа

      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Не удалось загрузить данные");
    }
  }

  useEffect(() => {
    fetchProducts(); // Загружаем продукты при монтировании
  }, []);
  return { products, error, loading, addProduct };
}
