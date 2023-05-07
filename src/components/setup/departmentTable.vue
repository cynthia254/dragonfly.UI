<template>
     <img src="../../assets/images/pay.jpg" alt="avatar" style="height: 50px;width: 200px;margin-right: 400px;margin-top: 20px;"> 
     <div style="width: 40%;">
  <div class="text-center">
    <button class="btn btn-default pull-right add-row" style="background-color: blue;margin-left: 900px;color: white;"><router-link to="/department" class="text-light" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>&nbsp;&nbsp; Add Department</router-link></button>
   </div>
</div>
   <div class="mx-5 pt-4" >
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Department Id</th>
          <th scope="col">Department Name</th>
          <th scope="col">Department Description</th>

        </tr>
      </thead>
      <tbody v-for="department in this.alldepartment" v-bind:key="department.id">
        <tr class="mt-4">
          <th scope="row">{{ department.departnmentid}}</th>
          <td>{{ department.departmentName }}</td>
          <td><p>{{department.departmentDescription}}</p></td>

     
        </tr>
     </tbody>
  
</table>
</div>
</template>
<script>
import AppMixins from "../../Mixins/shared.js"
export default{
    name:'departmentTable',
    mixins:[AppMixins],

    data(){
        return {
            alldepartment: [],
        };

    },
    methods:{

async getAllDepartment(){
  const response= await this.GettingAllDepartment();
   this.alldepartment=response.body;

   
   console.log("alldepartment: ", this.alldepartment);
  return response;

},
    },
    created(){
this.getAllDepartment();
}

}
</script>
<style>

</style>