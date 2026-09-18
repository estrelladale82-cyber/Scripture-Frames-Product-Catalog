import { useEffect, useMemo, useState } from "react"
import { products as initialProducts } from "@/data/products"

export function useCatalog() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")

  // Simulate an async data fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setProducts(initialProducts)
        setIsLoading(false)
      } catch (err) {
        setLoadError("We couldn't load the catalog. Please refresh the page.")
        setIsLoading(false)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  const addProduct = (newProduct) => {
    setProducts((current) => {
      const nextId =
        current.length > 0 ? Math.max(...current.map((p) => p.id)) + 1 : 1
      return [{ id: nextId, ...newProduct }, ...current]
    })
  }

    const deleteProduct = (id) => {
    setProducts((current) => current.filter((p) => p.id !== id))
  }

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category
      const matchesSearch =
        term.length === 0 ||
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)

      return matchesCategory && matchesSearch
    })
  }, [products, category, searchTerm])

  return {
    isLoading,
    loadError,
    products,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    addProduct,
    deleteProduct,
  }
}
