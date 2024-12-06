const products = [
    { id: 1, name: "Телевизор", category: "Электроника", price: 30000, rating: 4 },
    { id: 2, name: "Кроссовки", category: "Одежда", price: 5000, rating: 5 },
    { id: 3, name: "Смартфон", category: "Электроника", price: 25000, rating: 3 },
    { id: 4, name: "Наушники", category: "Электроника", price: 7000, rating: 4 },
    { id: 5, name: "Куртка", category: "Одежда", price: 10000, rating: 5 },
    { id: 6, name: "Утюг", category: "Бытовая техника", price: 4000, rating: 3 },
];

export default function handler(req, res) {
    const { category, minPrice, maxPrice, sort, page = 1, limit = 5 } = req.query;

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter((p) => p.category === category);
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter((p) => p.price <= Number(maxPrice));
    }

    if (sort) {
        filteredProducts.sort((a, b) => (sort === "price" ? a.price - b.price : b.rating - a.rating));
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + Number(limit);

    res.status(200).json(filteredProducts.slice(startIndex, endIndex));
}
