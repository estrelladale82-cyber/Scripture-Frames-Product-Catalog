import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, "aria-invalid": ariaInvalid, ...props }) {
  return (
    <textarea
      aria-invalid={ariaInvalid}
      className={cn(
        "flex min-h-20 w-full rounded-sm border border-hairline bg-card px-3 py-2 text-sm text-ink placeholder:text-forest-light",
        "transition-colors outline-none focus-visible:border-brass",
        "aria-[invalid=true]:border-brick",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
