// import { Counter } from "./Counter";

export default function PostsLayout ({children}){
    return(
        <div>
            <marquee style={{background: "purple", color:"white"}}>Hola mundo con Next JS version 13</marquee>
            {/* <Counter /> */}
            {children}
        </div>
    )
}