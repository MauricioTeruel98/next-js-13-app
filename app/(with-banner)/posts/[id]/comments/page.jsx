import Image from "next/image";

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    //throw new Error('Error al cargar los comentarios')
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json());
}

export default async function Post({params}){
    
    const {id} = params;

    const comments = await fetchComments(id)

    return(
        <ul style={{background:'#444' ,fontSize: '10px', padding:'10px 10px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image width='30' height='30' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.title} />
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}