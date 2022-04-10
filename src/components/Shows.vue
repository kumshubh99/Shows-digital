<template>
<div v-if='shows.length==0'>
    <h1>No Movies Found</h1>
</div>
<div class="container px-4" id='card'>
    <div class="row gx-5">
        <div class="col" v-for='shw in shows' :key="shw.score" style="margin-bottom:2%">
            <div class="card" style="width: 18rem;" v-if="shw.show.image!= null">
                <div>
                    <img :src="shw.show.image.medium" class="card-img-top" alt="picture">
                    <div class="card-body">
                        <h5 class="card-title">{{shw.show.name}}</h5>
                        <p class="card-text">{{shw.show.rating}}</p>
                        <a class="btn btn-primary" @click='info(shw.show.id)'>More Information</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import Axios from 'axios';
export default {
    name: 'Shows',
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
            Axios.get("https://api.tvmaze.com/search/shows?q=" + this.search).then(response => {
                this.shows = response.data;
                console.log(this.shows);
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
    },
}
</script>

<style scoped>
.carousel-inner {
    padding: 1em;
}

.card {
    margin: 0 0.5em;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
    border: none;
}

.carousel-control-prev,
.carousel-control-next {
    background-color: #e1e1e1;
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

@media (min-width: 768px) {
    .carousel-item {
        margin-right: 0;
        flex: 0 0 33.333333%;
        display: block;
    }

    .carousel-inner {
        display: flex;
    }
}

.card .img-wrapper {
    max-width: 100%;
    height: 13em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card img {
    max-height: 100%;
}

@media (max-width: 767px) {
    .card .img-wrapper {
        height: 17em;
    }
}

#card {
    margin-top: 2%;
    margin-bottom: 2%;
}
</style>
