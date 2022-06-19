import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './page/HomePage';
import NewPost from './page/NewPostPage';
import About from './page/AboutPage';
import PostPage from './page/PostPage';
import EditPost from './page/EditPostPage';
import Missing from './components/Missing';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <Header title='React JS Blog' />
      <DataProvider>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/post' component={NewPost} />
          <Route path='/post/:id' component={PostPage} />
          <Route path='/edit/:id' component={EditPost} />
          <Route path='/about' component={About} />
          <Route path='*' component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
