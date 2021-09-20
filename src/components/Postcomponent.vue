<template>
    <div>
        <h1>PostComponent</h1>
        <form @submit="postData" method="post">
            <input type="text" name="comentario" placeholder="comentario"> <br><br>
            <button type="submit">Post</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)



export default {
    name:"PostComponent",
    data(){
        return{
            posts:{
                comentario: ''
                
            }
        }
    },
    methods:{
        postData(e){
            //console.log(e)
            this.axios.post("http://localhost:3005/pokemons", this.posts )
            .then((result) =>{
                console.warn(result,"Then")
            })
            console.warn("retorno")
            e.preventDefault();
        }
    }
}
</script>

<style>

</style>