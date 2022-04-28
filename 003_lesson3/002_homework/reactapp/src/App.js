import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from "./components/Header/Header";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/users" element={<UsersPage />}/>
                <Route path="/posts" element={<PostsPage />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
