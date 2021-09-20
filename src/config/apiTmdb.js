import axios from 'axios';

const apiTmdb = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/'

});


export default apiTmdb;