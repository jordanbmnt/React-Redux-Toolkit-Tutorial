import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import "./postList.css";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const rederedPosts = orderedPosts.map((post) => (
    <article className='post' key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>

      <ReactionButtons post={post} />
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
