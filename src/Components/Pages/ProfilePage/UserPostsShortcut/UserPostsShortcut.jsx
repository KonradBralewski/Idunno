import SinglePostShortcut from "./SinglePostShortcut"

export default function UserPostsShortcut({posts}){
    
    function getPostsShortcut(){
        if (posts === undefined) return null

        return (
        <div>
            <p className="m-auto text-sm tablet:text-base laptop:text-xl text-center">{`Your Posts (${posts.length})`}</p>
            {posts.map(post => <SinglePostShortcut post={post} key={post.postId}/>)}
        </div>
        )
        
    }

    return (
        <section className="m-auto w-44 tablet:w-60">
            {getPostsShortcut()}
        </section>
    )
}