<template>

    <div class="background-show">  
        <div class="container">    
        <h2 class="text-center">{{contents.title}}</h2>
            
                <figure class="card-image text-center image-show">
                    <img :src="imageUrl + contents.backdrop_path" alt="Image">
                </figure>
                <h4>Sinopse:</h4>  
                <p>{{contents.overview}}</p>
                <h4>Nota:</h4>  
                <div>
                <p>{{contents.vote_average}}</p>
            
                <router-link to="/"><button type="button" class="btn btn-primary btn2">Voltar</button></router-link>
                </div>
                <div class="coments-area">
                <textarea type="text" name="comentario" id="comentario" cols="30" rows="5" placeholder="Digite seu comentário"></textarea>
                <br>
                <button type="button" class="btn btn-primary mb-5 btn-comments">Enviar</button>
                </div>
        </div>
    </div>         
    
</template>

<script>
import { apikey } from "../config/keyTmdb";
import apiTmdb from "../config/apiTmdb";
export default {
  data() {
    return {
      contents: [],
      baseurl: "https://api.themoviedb.org/3",
      imageUrl: "https://image.tmdb.org/t/p/w1280",
      apikey: apikey,
      id: this.$route.params.id
    };
  },
  mounted() {
    apiTmdb.get(this.baseurl +
          '/movie/' +
          this.id +
          this.apikey
      )
      .then((response) => {
        console.log(response.data);
        this.contents = response.data;
      });
  },
};
</script>

<style>
.container{
  width: 90%;
}
.image-show img{
    width: 90%;
    height: 90%;
    padding-top: 100px;
}
.background-show{
    height: 200vh;
    width: 100vw;
    background-color:	#1C1C1C;
    color: blanchedalmond;
    padding-bottom: 100px;
}

.btn-comments{
    transform: translateX(95px);
}

.coments-area{
  margin-top: 50px;
  padding-right: 50px;
  transform: translateX(35%);
}

@media (max-width:764px){
  .btn2{
    transform: translateX(250%);
}
.coments-area{
  
  transform: translateX(15%);
}
}
</style>