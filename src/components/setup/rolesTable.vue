<template>
  <button style="width: 30%;margin-left: 40%;margin-top: 20px;" class="btn btn-primary"><router-link to="/roles" class="text-light" style="text-decoration: none;">Add Role</router-link></button>
    <table class="table table-bordered border-black" style="margin-top: 50px;">
  <thead>
    <tr>
      <th scope="col">Role ID</th>
      <th scope="col">Role Name</th>
 
     
    </tr>
  </thead>
  <tbody v-for="roles in this.allroles" v-bind:key="roles.id">
    <tr>
    
      <td>{{ roles.rolesID }}</td>
      <td>{{ roles.roleName }}</td>
    
    </tr>
 
  </tbody>
</table>
</template>
<script>
import AppMixins from "../../Mixins/shared.js"
export default{
    name:'rolesTable',
    mixins:[AppMixins],

data(){
    return {
        allroles: [],
    };

},
methods:{

async GetAllRoles(){
const response= await this.GettingAllRoles();
this.allroles=response.body;


console.log("allroles: ", this.allroles);
return response;

},
},
created(){
this.GetAllRoles();
}
};
</script>