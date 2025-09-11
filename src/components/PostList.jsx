import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem number={index + 1} post={post} key={post.id} deletePost={deletePost}/>
            )} 
        </div>
    )
}

export default PostList;