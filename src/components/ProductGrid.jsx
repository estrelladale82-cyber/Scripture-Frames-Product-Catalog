import ProductCard from "@/components/ProductCard"

function SkeletonCard() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse overflow-hidden rounded-sm border border-hairline bg-card"
    >
      <div className="aspect-[4/5] w-full bg-parchment-light" />
      <div className="space-y-2 p-5">
        <div className="h-4 w-3/4 rounded bg-parchment-light" />
        <div className="h-3 w-full rounded bg-parchment-light" />
        <div className="h-3 w-1/2 rounded bg-parchment-light" />
      </div>
    </div>
  )
}

export default function ProductGrid({ products, isLoading, loadError, onDeleteProduct }) {
  if (loadError) {
    return (
      <div role="alert" className="rounded-sm border border-brick/30 bg-card p-8 text-center">
        <p className="text-sm text-brick">{loadError}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div
        role="status"
        aria-busy="true"
        aria-label="Loading frames"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="rounded-sm border border-hairline bg-parchment-light p-10 text-center">
        <p className="font-display text-lg text-ink">No frames match yet</p>
        <p className="mt-1 text-sm text-forest">
          Try a different search term or category — or add a new frame.
        </p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
                <li key={product.id}>
          <ProductCard product={product} onDelete={onDeleteProduct } />
        </li>
      ))}
    </ul>
  )
}
