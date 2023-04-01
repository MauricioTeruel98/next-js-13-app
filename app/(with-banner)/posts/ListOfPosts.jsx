import Link from "next/link"
import LikeButton from "./LikeButton"

const fetchPosts = () => {
    console.log('Fetching posts')

    return fetch('https://jsonplaceholder.typicode.com/posts',
    {
        next: {
            revalidate: 60
        }
    })
        /*
            {cache: 'no-store'} //Sirve para no generar paginas estaticas en el build
            {
                next: {
                    revalidate: 60
                }
            } // Sirve para recargar el contenido, en este caso cada 60 segundos
        */
        .then(res => res.json())
}

export async function ListOfPosts() {
    const posts = await fetchPosts()

    return (
        posts.slice(0, 5).map(post => (
            <>
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id={post.id} />
                    </Link>
                </article>
                <hr />
            </>
        ))
    )
}