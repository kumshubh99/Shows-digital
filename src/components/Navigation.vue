<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Digital Show</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"> 
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to='/'>Home</router-link></a>
        </li>
         <li class="nav-item dropdown">
          <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"  data-toggle="dropdown" >
            Dropdown
          </a> -->
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Drama</a></li>
            <li><a class="dropdown-item" href="#">Comedy</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="name">
        <button class="btn btn-outline-success" type="submit" @click="onSearch" >Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view/>
</div>

</template>
<script>
export default {
    name:'Navbar',
    data(){
      return{
         name: '',
      }
    },
    methods: {
        onSearch(){
          this.$router.push({name:"Shows" , params:{data: this.name}})
        }
    }
}
</script>
<style scoped>

</style>