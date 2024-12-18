import { categories } from '../../api/data'
import { Suspense } from 'react'

export default async function Layout({ children, params }) {
  const category = params.category

  if (!categories.includes(category)) {
    return (
      <div className="content-container">
        <h2 className="error-title">Категория не найдена</h2>
      </div>
    )
  }

  return (
    <div className="category-layout">
      <div className="category-sidebar">
        <h2 className="category-sidebar-title">{category}</h2>
        <p className="category-sidebar-desc">Category description</p>
      </div>
      <div className="category-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
