import { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onConetentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action=''>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postTitle'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onConetentChanged}
        />
        <button type='button'>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
