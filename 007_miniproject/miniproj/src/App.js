import {Routes, Route} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {DaddyOfPages, GenresPage, HomePage, MoviePage, MoviesPage} from "./Pages";
import "./App.css";

const App = () => {
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
    }

    return (
        <div className="app" data-theme={theme}>
            <Routes>
                <Route path={"/"}  element={<DaddyOfPages toggleTheme={toggleTheme} theme={theme}/>}>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"movies"} element={<MoviesPage/>}/>
                    <Route path={"movies/:movieId"} element={<MoviePage/>}/>
                    <Route path={"genres"} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;