import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-sm border border-hairline bg-card text-ink",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-5", className)} {...props} />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-display text-lg font-medium leading-tight", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("text-sm text-forest-light", className)} {...props} />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-5 pt-0", className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return (
    <div className={cn("flex items-center p-5 pt-0", className)} {...props} />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
