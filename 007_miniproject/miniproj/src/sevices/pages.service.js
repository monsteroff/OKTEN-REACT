import {axiosService} from "./axios.service";
import {urls} from "../config";

export const pagesService = {
    getPageByNumberWithGenre: (genre, page) => axiosService.get(urls.discover_movie , {
        params : {
            with_genres: genre,
            page : page
        }
    }).then(v => v.data)
};