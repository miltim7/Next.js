import { categories } from '../api/data'

export const dynamic = 'force-static'

export default async function Page() {
  return (
    <div className="content-container">
      <h1 className="content-title">Categories</h1>
      <ul className="categories-list">
        {categories.map(c => (
          <li key={c} className="category-item">
            <a href={`/categories/${c}`} className="category-link">{c}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
