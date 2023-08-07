import "./App.css";
import AddPostForm from "./app/features/post/AddPostForm";
import PostsList from "./app/features/post/PostList";

function App() {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
