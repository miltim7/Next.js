import { useRouter } from 'next/router';

const postDetails = {
    a: { title: 'Событие 1', content: 'Описание события 1' },
    b: { title: 'Событие 2', content: 'Описание события 2' },
    c: { title: 'Новости 1', content: 'Описание новости 1' },
    d: { title: 'Новости 2', content: 'Описание новости 2' },
};

export default function Post() {
    const { query } = useRouter();
    const { categoryId, postId } = query;
    const post = postDetails[postId];

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <button onClick={() => history.back()}>Вернуться к списку постов</button>
                </>
            ) : (
                <h1>Пост не найден</h1>
            )}
        </div>
    );
}
