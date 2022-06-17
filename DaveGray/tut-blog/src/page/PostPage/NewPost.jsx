const NewPost = ({ postTitle, setPostTitle, postBoby, setPostBody, handleSubmit }) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title</label>
        <input id='postTitle' type='text' required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
        <label htmlFor='postBoby'>Post: </label>
        <textarea id='postBoby' required value={postBoby} onChange={(e) => setPostBody(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
