import { posts } from '../../api/data'

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {
  const category = params.category

  if (!posts[category]) {
    return (
      <div className="content-container">
        <h2 className="error-title">Категория не найдена</h2>
      </div>
    )
  }

  const categoryPosts = posts[category]

  return (
    <div className="posts-container">
      <h2 className="content-title">{category}</h2>
      <ul className="posts-list">
        {categoryPosts.map(p => (
          <li key={p.id} className="post-item">
            <a href={`/categories/${category}/${p.id}`} className="post-link">{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
