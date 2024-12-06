import { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';

export async function getServerSideProps({ query }) {
    const { page = 1, limit = 5 } = query;
    const res = await fetch(`http://localhost:3000/api/products?page=${page}&limit=${limit}`);
    const products = await res.json();

    return {
        props: {
            initialProducts: products,
            page: Number(page),
        },
    };
}

export default function Products({ initialProducts, page }) {
    const [products, setProducts] = useState(initialProducts);
    const [filters, setFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            const query = new URLSearchParams({ ...filters, page }).toString();
            const res = await fetch(`/api/products?${query}`);
            const filteredProducts = await res.json();
            const searchedProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProducts(searchedProducts);
        };

        fetchFilteredProducts();
    }, [filters, searchQuery, page]);

    return (
        <div>
            <h1>Список товаров</h1>
            <Filters onFilterChange={setFilters} />
            <SearchBar onSearchChange={setSearchQuery} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.category} - {product.price}₽ - Рейтинг: {product.rating}
                    </li>
                ))}
            </ul>
            <div>
                {page > 1 && <a href={`/products?page=${page - 1}`}>Назад</a>}
                <a href={`/products?page=${page + 1}`}>Вперед</a>
            </div>
        </div>
    );
}
