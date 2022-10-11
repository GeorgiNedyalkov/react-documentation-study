import { useState } from "react"

import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <main>
      <SearchBar
        filterText={filterText}
        isStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={inStockOnly}
      />
    </main>
  )
}
