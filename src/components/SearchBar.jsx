import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <Label htmlFor="search" className="sr-only">
        Search frames by title or description
      </Label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-light"
        />
        <Input
          id="search"
          type="search"
          placeholder="Search frames…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-9"
        />
      </div>
    </div>
  )
}
