import SinglePostShortcut from "./SinglePostShortcut"

export default function UserPostsShortcut({posts}){
    
    function getPostsShortcut(){
        if (posts === undefined) return null

        return posts.map(post => <SinglePostShortcut post={post} key={post.postId}/>)
    }
    console.log(posts)
    return (
        <section className="m-auto w-44 tablet:w-60">
            {getPostsShortcut()}
        </section>
    )
}