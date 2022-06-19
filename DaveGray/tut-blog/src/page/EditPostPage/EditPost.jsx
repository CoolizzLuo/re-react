import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { format } from 'date-fns';
import api from '../../api/posts';

const EditPost = () => {
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const history = useHistory();

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, datetime, title: editTitle, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
      setEditTitle('');
      setEditBody('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className='NewPost'>
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title</label>
            <input
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postBoby'>Post: </label>
            <textarea id='postBoby' required value={editBody} onChange={(e) => setEditBody(e.target.value)} />
            <button type='submit' onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
