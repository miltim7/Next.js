'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditCar() {
    const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const [formData, setFormData] = useState({
        id: '',
        brand: '',
        model: '',
        year: '',
        color: '',
        price: '',
    });

    useEffect(() => {
        fetch('/api/cars')
            .then((res) => res.json())
            .then((data) => {
                const car = data.find((car) => car.id === id);
                if (car) setFormData(car);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/cars', {
            method: 'PUT',
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
            <h1>Редактировать автомобиль</h1>
            <input name="brand" value={formData.brand} onChange={handleChange} required />
            <input name="model" value={formData.model} onChange={handleChange} required />
            <input name="year" value={formData.year} type="number" onChange={handleChange} required />
            <input name="color" value={formData.color} onChange={handleChange} required />
            <input name="price" value={formData.price} type="number" onChange={handleChange} required />
            <button type="submit">Сохранить</button>
        </form>
    );
}
