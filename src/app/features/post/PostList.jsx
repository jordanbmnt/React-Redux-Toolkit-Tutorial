import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import "./postList.css";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const rederedPosts = posts.map((post) => (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {rederedPosts}
    </section>
  );
};

export default PostsList;
