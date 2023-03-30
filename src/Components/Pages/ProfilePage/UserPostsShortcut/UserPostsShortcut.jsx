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
        <section className="w-44 tablet:w-52 laptop:w-64 tablet:max-h-72 laptop:mt-8 pr-2">
            {getPostsShortcut()}
        </section>
    )
}