import {axiosService} from "./axios.service";
import {urls} from "../config";

export const moviesService = {
    getMovieById: (id) => axiosService.get(urls.movie + "/" + id).then(v => v.data)
};