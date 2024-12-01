import Link from 'next/link';
import { useRouter } from 'next/router';

const posts = {
    '1': [
        { id: 'a', title: 'Событие 1 Категории 1' },
        { id: 'b', title: 'Событие 2 Категории 1' },
    ],
    '2': [
        { id: 'c', title: 'Новость 1 Категории 2' },
        { id: 'd', title: 'Новость 2 Категории 2' },
    ],
};

export default function Category() {
    const { query } = useRouter();
    const { categoryId } = query;
    const categoryPosts = posts[categoryId] || [];

    if (!categoryPosts.length) {
        return <h1>Категория не найдена</h1>;
    }

    return (
        <div>
            <h1>Записи категории {categoryId}</h1>
            <ul>
                {categoryPosts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/category/${categoryId}/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}