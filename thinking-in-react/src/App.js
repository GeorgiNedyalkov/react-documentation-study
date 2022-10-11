import { tab } from "@testing-library/user-event/dist/tab"
import "./App.css"

function App() {
  return (
    <div className="app">
      <FilterableProductTable />
    </div>
  )
}

function FilterableProductTable() {
  return (
    <section className="filterableProductTable">
      <SearchBar />
    </section>
  )
}

function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search..." />
    </div>
  )
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

export default App
