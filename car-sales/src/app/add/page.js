'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddCar() {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: '',
        color: '',
        price: '',
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/cars', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        router.push('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Добавить автомобиль</h1>
            <input name="brand" placeholder="Марка" onChange={handleChange} required />
            <input name="model" placeholder="Модель" onChange={handleChange} required />
            <input name="year" placeholder="Год" type="number" onChange={handleChange} required />
            <input name="color" placeholder="Цвет" onChange={handleChange} required />
            <input name="price" placeholder="Цена" type="number" onChange={handleChange} required />
            <button type="submit">Добавить</button>
        </form>
    );
}
