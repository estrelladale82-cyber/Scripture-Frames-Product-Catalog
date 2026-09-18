import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductForm from "@/components/ProductForm";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useCatalog } from "@/hooks/useCatalog";

function App() {
  const {
    isLoading,
    loadError,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    addProduct,
    deleteProduct,
  } = useCatalog();

  return (
    <div className="min-h-screen bg-parchment">
      <a
        href="#catalog"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-parchment-light"
      >
        Skip to catalog
      </a>
      <Header />
      <Hero />

      <main id="catalog" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <aside aria-label="Add a frame">
            <div className="md:sticky md:top-8">
              <ErrorBoundary>
                <ProductForm onAddProduct={addProduct} />
              </ErrorBoundary>
            </div>
          </aside>

          <section aria-labelledby="catalog-heading">
            <h2 id="catalog-heading" className="sr-only">
              Catalog
            </h2>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CategoryFilter value={category} onChange={setCategory} />
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>

            <p aria-live="polite" className="sr-only">
              {filteredProducts.length} frames found
            </p>

            <ErrorBoundary>
              <ProductGrid
                products={filteredProducts}
                isLoading={isLoading}
                loadError={loadError}
                onDeleteProduct={deleteProduct}
              />
            </ErrorBoundary>
          </section>
        </div>
      </main>

      <footer className="border-t border-hairline py-8 text-center text-sm text-forest-light">
        *Scripture Frames* An AltSchool Africa React Project. Built with❤️ by
        Eleojo. 2026
      </footer>
    </div>
  );
}

export default App;
