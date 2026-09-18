import { ChevronDown, Trash2 } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const CATEGORY_LABELS = {
  "wall-frame": "Wall Frame",
  "desk-frame": "Desk Frame",
}

export default function ProductCard({ product, onDelete }) {
  const hasCaption = product.verseText && product.scripture

  const handleDelete = () => {
    if (window.confirm(`Delete "${product.title}"? This can't be undone.`)) {
      onDelete?.(product.id)
    }
  }

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-parchment-light">
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {hasCaption && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent px-4 pb-4 pt-10"
          >
            <p className="font-display text-base italic leading-snug text-parchment-light sm:text-lg">
              "{product.verseText}…"
            </p>
            <p className="mt-1 text-xs tracking-wide text-parchment-light/80">
              {product.scripture}
            </p>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{product.title}</CardTitle>
          <button
            type="button"
            onClick={handleDelete}
            aria-label={`Delete ${product.title}`}
            className="shrink-0 rounded-sm p-1.5 text-forest-light transition-colors hover:bg-brick/10 hover:text-brick"
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-3">
        <div className="text-sm text-forest">
          {CATEGORY_LABELS[product.category]}
        </div>

        <details className="group border-t border-hairline pt-3">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            More details
            <ChevronDown
              aria-hidden="true"
              className="h-4 w-4 text-forest-light transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="mt-2 text-sm text-forest-light">
            {product.description}
          </p>
        </details>
      </CardContent>
      <CardFooter>
        <span className="font-display text-lg text-ink">
          ${product.price.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  )
}