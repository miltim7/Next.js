'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const deleteCar = async (id) => {
    await fetch('/api/cars', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div>
      <h1>Список автомобилей</h1>
      <Link href="/add">Добавить автомобиль</Link>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} - {car.price}₽
            <Link href={`/edit/${car.id}`}>Редактировать</Link>
            <button onClick={() => deleteCar(car.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
