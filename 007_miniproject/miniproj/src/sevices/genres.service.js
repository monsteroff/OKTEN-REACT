import {axiosService} from "./axios.service";
import {urls} from "../config";

export const genresService = {
    getAllGenres: () => axiosService.get(urls.genres_movie_list).then(value => value.data)
};