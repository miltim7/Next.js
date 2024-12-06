export default function SearchBar({ onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Поиск товаров..."
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}
