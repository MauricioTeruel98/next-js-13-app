import { Suspense } from "react"
import { ListOfPosts } from "./ListOfPosts"

export default async function PostsPage() {

    return (
        <section>
            <Suspense fallback={<p>Cargando posts...</p>}>
                <ListOfPosts />
            </Suspense>
        </section>
    )
}