import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: { "Content-Type": "application/json" },
});

const apiKey = "59584b0ac2fbdd20ba3c1c86f06a7c6d"

const apiOriginals = async () => {
    const res = await api.get(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
    return res.data.results
}

const apiTrending = async () => {
    const res = await api.get(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
    return res.data.results
}

const apiTopRated = async () => {
    const res = await api.get(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
    return res.data.results
}

const apiGenreMovies = async (idGenre: number) => {
    const res = await api.get(`/discover/movie?with_genres=${idGenre}&language=pt-BR&api_key=${apiKey}`)
    return res.data.results
}

export {
    apiOriginals,
    apiTrending,
    apiTopRated,
    apiGenreMovies
};