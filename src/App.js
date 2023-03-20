import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPost from './pages/AddPost';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addPost' element={<AddPost />} />
        <Route path='/post/:postId' element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
