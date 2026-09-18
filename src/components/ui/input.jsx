import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, "aria-invalid": ariaInvalid, ...props }) {
  return (
    <input
      type={type}
      aria-invalid={ariaInvalid}
      className={cn(
        "flex h-10 w-full rounded-sm border border-hairline bg-card px-3 py-2 text-sm text-ink placeholder:text-forest-light",
        "transition-colors outline-none focus-visible:border-brass",
        "aria-[invalid=true]:border-brick",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
