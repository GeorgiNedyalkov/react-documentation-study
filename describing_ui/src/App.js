import "./App.css"
import TodoList from "./TodoList"
import Profile from "./Profile"
import PackingList from "./Item"
import { people } from "./data"
import { getImageUrl } from "./utils"
import List from "./List"

function App() {
  return (
    <div className="App">
      <Gallery />
      <TodoList />
      <PackingList />
      <List />
    </div>
  )
}

function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
    </section>
  )
}

export default App
