import { Component } from "react"
import { Button } from "@/components/ui/button"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // In a real app this would report to a logging service.
    console.error("Scripture Frames crashed:", error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="mx-auto my-16 max-w-md rounded-sm border border-brick/30 bg-card p-8 text-center"
        >
          <h2 className="font-display text-xl font-medium text-ink">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-forest-light">
            The catalog hit an unexpected error while rendering. Try
            reloading this section.
          </p>
          <Button className="mt-5" onClick={this.handleReset}>
            Try again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
