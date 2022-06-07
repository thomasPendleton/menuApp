import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import menu from './data'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
// console.log(allCategories);

function App() {
  const [items, setItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filteredItems = (category) => {
    if (category === 'all') {
      setItems(menu)
      return
    }
    const newItems = menu.filter((item) => {
      return item.category === category
    })
    setItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteredItems={filteredItems} categories={categories} />
        <Menu items={items} />
      </section>
    </main>
  )
}

export default App
