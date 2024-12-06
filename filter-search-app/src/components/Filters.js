export default function Filters({ onFilterChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <label>
                Категория:
                <select name="category" onChange={handleChange}>
                    <option value="">Все</option>
                    <option value="Электроника">Электроника</option>
                    <option value="Одежда">Одежда</option>
                    <option value="Бытовая техника">Бытовая техника</option>
                </select>
            </label>
            <label>
                Цена от:
                <input type="number" name="minPrice" onChange={handleChange} />
            </label>
            <label>
                Цена до:
                <input type="number" name="maxPrice" onChange={handleChange} />
            </label>
            <label>
                Сортировка:
                <select name="sort" onChange={handleChange}>
                    <option value="">Без сортировки</option>
                    <option value="price">По цене</option>
                    <option value="rating">По рейтингу</option>
                </select>
            </label>
        </div>
    );
}
