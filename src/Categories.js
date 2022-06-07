import React from 'react'

const Categories = ({ filteredItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => {
        return (
          <button
            key={idx}
            className="filter-btn"
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
