function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✨"}
    </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally's Packing List</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={true} name="helmet with golden leaf" />
        <Item isPacked={false} name="Photo of tam" />
      </ul>
    </section>
  )
}
