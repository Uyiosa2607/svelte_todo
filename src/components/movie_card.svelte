<script> 

import {onMount} from "svelte"

let movies = []

 onMount(()=> {

    async function fetchAndHandle(){
    const data = await fetchData(url)
    movies = data.results
    console.log(movies) 
}

fetchAndHandle()

}
 )
 import fetchData from "../utils/fetch_data.js"

 const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

 async function fetchAndHandle(){
    const data = await fetchData(url)
    movies = data.results
    console.log(movies)
 }

 fetchAndHandle()

</script>

<style>

</style>
<div class="image_container">
    {#each movies as movie (movie.id)} 
    <div class="movie_card">
    <img class="movie_preview" src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path} alt="">
    <p class="title">{movie.title}</p>
    <!-- <span class="movie_overview">{movie.overview}</span> -->
</div>
{/each}
</div>
