import { CATEGORIES } from "@/data/products"
import { cn } from "@/lib/utils"

const OPTIONS = [{ value: "all", label: "All Frames" }, ...CATEGORIES]

export default function CategoryFilter({ value, onChange }) {
  return (
    <div role="group" aria-label="Filter by category" className="flex gap-2">
      {OPTIONS.map((option) => {
        const isActive = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "border-brass bg-brass text-white"
                : "border-hairline bg-transparent text-forest hover:border-brass/50"
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
