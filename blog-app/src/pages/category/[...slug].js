import { useRouter } from 'next/router';

export default function CatchAll() {
    const router = useRouter();
    return (
        <div>
            <h1>Ошибка 404: Страница не найдена</h1>
            <button onClick={() => router.push('/')}>Вернуться на главную страницу</button>
        </div>
    );
}