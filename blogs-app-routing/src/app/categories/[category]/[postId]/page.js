'use client'
import { posts } from '../../../api/data'
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function Page() {
  const { category, postId } = useParams()

  if (!posts[category]) {
    return <div className="content-container"><h2 className="error-title">Категория не найдена</h2></div>
  }

  const post = posts[category].find(p => p.id.toString() === postId)
  if (!post) {
    return <div className="content-container"><h2 className="error-title">Пост не найден</h2></div>
  }

  const [favorite, setFavorite] = useState(false)

  return (
    <div className="content-container">
      <h3 className="content-title">{post.title}</h3>
      <button className="favorite-button" onClick={() => setFavorite(!favorite)}>
        {favorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  )
}
