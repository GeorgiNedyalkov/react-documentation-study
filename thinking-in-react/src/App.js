import React, { useState } from "react"
import "./App.css"

import { PRODUCTS } from "./api/data"
import FilterableProductTable from "./components/FilterableProductTable"
function App() {
  return (
    <div className="app">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}

export default App
