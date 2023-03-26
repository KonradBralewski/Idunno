import demoImg from "Assets/Demo.jpg"
import { rawHtmlToJSX, rawHtmlToJSXWithClass } from "Helpers/EditorHelpers"
export default function PostPageContent({post}){
    return (
        <article>
            {rawHtmlToJSXWithClass(post.postTitle, "p", "text-center text-xs xs:text-sm")}
            <section className="laptop:flex justify-center items-center mb-2">
                <img className="w-32 tablet:w-72 laptop:w-80 laptop:mr-5 m-auto laptop:m-0" src={demoImg} alt="post"/>
                {rawHtmlToJSXWithClass(post.postDescription, "p", "w-32 text-xs xs:text-sm xs:w-48 break-words text-center m-auto laptop:m-0")}
            </section>
            <p className="text-center text-xs xs:text-sm text-gray-500">{post.postDate}</p>
            {post.postAuthor != undefined && 
            <p className="text-center text-xs xs:text-sm text-gray-500">{`Author: ${post.postAuthor}`}</p>}
        </article>
    )
} 