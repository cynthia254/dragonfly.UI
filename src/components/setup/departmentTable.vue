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
          <th scope="col">Actions</th>

        </tr>
      </thead>
      <tbody v-for="department in this.alldepartment" v-bind:key="department.id">
        <tr class="mt-4">
          <th scope="row">{{ department.departnmentid}}</th>
          <td>{{ department.departmentName }}</td>
          <td><p>{{department.departmentDescription}}</p></td>
          <td>            <button type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>

          </td>

     
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