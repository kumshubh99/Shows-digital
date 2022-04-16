<template>
<div class="container-fluid" id="viewcourses">
  <div class="row" >
    <div class="col-sm" v-if="show!=null">
      <img v-bind:src="show.image.medium" style="width:50%; height: 100%" >
    </div>
    <div class="col-sm">
      <div class="viewcourses">
        <h1 style="text-align: center; ">{{show.name}}</h1>
       Rating: {{show.rating.average}} <br>
       Premiered: {{show.premiered}}<br>
       Official Site: {{show.officialSite}}<br>
       Genre: {{show.genres}}<br>
       Summary: {{show.summary}}
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Axios from 'axios';
export default{
    name:'ShowInfo',
    data(){
        return{
            id:this.$route.params.data,
            show:{}
        }
    },
     created (){
      this.getUser();
    },
    methods:{
        getUser(){
          console.log(this.search)   
        this.loading=true;
        Axios.get("https://api.tvmaze.com/shows/"+this.id).then(response => {
            this.show = response.data;
            this.loading=false;
        }).catch(err =>{
            this.laoding=false;
            this.err='Somthing went wrong....'
            console.log('error', err)
        });
        },
    }
}
</script>

<style scoped>
td,tr,th {
  text-align: center;
  vertical-align: middle;
}
table,th,tr,td{
  border: solid; margin: 10px; align:center;
}
.buttonclass{
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: auto;
}
button{
  color: inherit;
  border-radius: 5px;
  border-width: medium;
  border-color: green;

}
#box{
  color: black;
}


 .viewcourses{
    margin-top: 20%;
    margin-bottom: 5%;
    text-align: center;
  }
  .serch{
    background: #e0064f; 
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .serch:hover{
    background-color: white;
    color: #050b14;
  }
  
  #viewcourses{
    background-color:#313335;
    border-style: solid outset;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 2px solid #02070e;
    border-radius: 12px;
    color: white;
  }
    .container{
    margin-top: 1%;
    height: 500px;
    margin-bottom: 1%;
  }
</style>
