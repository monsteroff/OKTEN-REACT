import {Routes, Route, Navigate} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AuthProvider from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";

import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";

function App() {
  return (
    <AuthProvider>
        <Routes>
            <Route path={"/"} element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path={"about"} element={<AboutPage />} />
                <Route path={"about-us"} element={<Navigate to={"/about"} />} />
                <Route path={"users"} element={
                    <RequireAuth>
                        <UsersPage />
                    </RequireAuth>
                }/>
                <Route path={"posts"} element={<PostsPage />} />
                <Route path={"posts/:id"} element={<SinglePostPage />} />
                <Route path={"*"} element={<NotFoundPage /> } />
                <Route path={"login"} element={<LoginPage />} />
            </Route>
        </Routes>
    </AuthProvider>
  );
}

export default App;