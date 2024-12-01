import Link from 'next/link';

const categories = [
    { id: '1', name: 'События' },
    { id: '2', name: 'Новости' },
];

export default function Home() {
    return (
        <div>
            <h1>Список категорий</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
