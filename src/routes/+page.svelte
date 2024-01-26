
<script>

    import axios from "axios";
    import Navbar from "../components/navbar.svelte";
    import MovieCard from "../components/movie_card.svelte";

</script>

<style lang="scss">

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background: teal;
        color: #fff; 
    }

</style>

<div class="container">
    <header>
        <Navbar/>
    </header>
    <main>
        <h3>Movie List</h3>
        <MovieCard/>
    </main>
</div>