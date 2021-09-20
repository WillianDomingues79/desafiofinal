<template>
  <b-container fluid class="bv-example-row">
      <h1 class="text-center">Filmes Cappacita</h1>
    <b-row>
        <b-col sm="12" md="6" v-for="content in contents.results" :key="content.id"> 
            <div class="conteudo">      
            <router-link :to="{name: 'ShowMovie' , params:{id: content.id}}">
                    
                <figure class="card-image text-center">
                    <img :src="imageUrl + content.backdrop_path" alt="Image">
                </figure>

            </router-link> 
            <div class="bottom-area">
            <h3 class="text-center mb-3">{{content.original_title}}</h3>
            
                    <h5 class="text-center mb-5">Lançamento: {{content.release_date}}</h5>
                    <router-link :to="{name: 'ShowMovie' , params:{id: content.id}}"><button type="button" class="btn btn-primary button-bottom-area">Ver Sinopse</button></router-link>
                    </div>
            </div>         
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
require("dotenv").config();
import apiTmdb from "../config/apiTmdb";
import { apikey } from "../config/keyTmdb";
import ShowMovie from "./ShowMovie.vue";
//import api3 from '../services/apiPokemon'

export default {
  data() {
    return {
      contents: [],
      imageUrl: "https://image.tmdb.org/t/p/w1280",
      baseurl: "https://api.themoviedb.org/3",
      apikey: apikey,
      movie: ShowMovie,
    };
  },
  mounted() {
    apiTmdb
      .get(
        this.baseurl +
          "/movie/now_playing" +
          this.apikey +
          "&language=en-US&page=1"
      )
      .then((response) => {
        console.log(response.body);
        this.contents = response.data;
      });
  },
};
</script>


<style>
.bv-example-row{
    padding-bottom: 100px;
}

.conteudo img{
    width: 70%;
    height: 50%;
    margin-top: 100px;
}

.bottom-area{
  width: 50%;
  transform: translateX(50%);
}
.bv-example-row{
    background-color:	#1C1C1C;
    color: blanchedalmond;
}

.button-bottom-area{
    transform: translateX(100%);
    position: fixed;
}

</style>