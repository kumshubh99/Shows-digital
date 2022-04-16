<template>
<div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">

            <div class="carousel-item active">
                <router-link to='/shows/action'><img src="https://img.freepik.com/free-vector/loving-couple-movie-theater_107791-5120.jpg?t=st=1648880701~exp=1648881301~hmac=3635b853c6ce81cca71aa2834a7ca07156a29578ad54f5ce5ab4bf9cc5692926&w=1380" alt="Action" style="width:100%; height: 400px"></router-link>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Action</h5>
                    <p></p>
                </div>
            </div>

            <div class="carousel-item">
                <router-link to='/shows/comedy'><img src="https://img.freepik.com/free-vector/theatre-background-illustration_1284-7193.jpg?t=st=1648880550~exp=1648881150~hmac=62b5f5b10f8a0965a7036ebcb3f6e512333ddad97ccd79da8afa01a34f06113d&w=740" alt="Comedy" style="width:100%; height: 400px"></router-link>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Comedy</h5>
                    <p></p>
                </div>
            </div>

            <div class="carousel-item">
                <router-link to='/shows/drama'><img src="https://img.freepik.com/free-vector/funny-lol-stickers-set_23-2148578032.jpg?t=st=1648882594~exp=1648883194~hmac=8c62fc1da0090ff70cb49b24bdb9904eaf4a433903baa5ef2c8fe32ee4272e5b&w=996" alt="Drama" style="width:100%; height: 400px"> </router-link>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Drama</h5>
                    <p></p>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>


<!-- <div class="container" id='card'>
    <div class="row">
        <div class="col" v-for='shw in shows' :key="shw.id" style="margin-bottom:2%">
            <div >
                <MovieCard v-if="shw.image!= null"
                    :img="shw.image.medium" 
                    :name="shw.name"
                    :id="shw.id"
                    :description="shw.summary"
                    :rating="shw.rating.average"
                    :runtime="card.runtime"
                />
            </div>
        </div>
    </div>
</div> -->
<div class="container" id='card'>
    <div class="row gx-5
    ">
        <div class="col gx-1" v-for='shw in shows' :key="shw.id" style="margin-bottom:2%">
            <div v-if="shw.status=='Running'">
                <div class="card" style="width: 15rem;" v-if="shw.image!= null">
                    <img :src="shw.image.medium" class="card-img-top" alt="picture">
                    <div class="card-body">
                        <h5 class="card-title">{{shw.name}}</h5>
                        <p class="card-text">Rating : {{shw.rating.average}}</p>
                        <p class="card-text">Status : {{shw.status}}</p>
                        <!-- <a class="btn btn-primary" @click='info(shw.show.id)'>More Information</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
import Axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            search: this.$route.params.data,
            shows: [],
            loading: false,
            err: '',
        }
    },
    created() {
        this.getShows();
    },
    methods: {
        getShows() {
            console.log(this.search)
            this.loading = true;
            Axios.get("https://api.tvmaze.com/shows").then(response => {
                this.shows = response.data;
                this.id = this.shows[0].show.id;
                this.loading = false;
            }).catch(err => {
                this.laoding = false;
                this.err = 'Somthing went wrong....'
                console.log('error', err)
            });
        },
        info(id) {
            console.log(id);
            this.$router.push({
                name: "ShowInfo",
                params: {
                    data: id
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
