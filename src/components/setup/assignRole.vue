<template>
  <div class="col-md-10" style="margin-left: 10%">
    <span class="anchor" id="formContact"></span>
    <hr class="my-5" />
    <!-- form contact -->
    <div class="card card-outline-secondary">
      <div class="card-header">
        <h3 class="mb-0">Assign Role To User</h3>
      </div>
      <div class="card-body">

          <fieldset>
            <label class="mb-0">Email</label>
            <div class="row mb-1">
              <div class="col-lg-12">
                <input class="form-control" v-model="this.formdata.userEmail" type="text" />
              </div>
            </div>
            <label class="mb-0">Roles</label>
            
            <div class="mb-4 pb-2" style="width: 100%">
                      <select class="select" style="
                          width: 100%;
                          height: 50px;
                          background-color: white;
                        "
                          v-model="this.formdata.RolesID"
                         >
                       
                      

                        <option value="" >SuperAdmin</option>
                        <option value="" >Admin</option>
                        <option value="" >Partner</option>
                        <option value="" >User</option>
               
                       
                      </select>
                    </div>
    
<!-- Table  -->
<table class="table table-bordered">
  <!-- Table head -->
  <thead>
    <tr>
      <th>
        <!-- Default unchecked -->
      
      </th>
      <th>Responsibilities Id</th>
      <th>Responsibilities</th>
      <th>Grant Permission</th>
      
    </tr>
  </thead>
  <!-- Table head -->

  <!-- Table body -->
  <tbody>
    <tr>
      <th scope="row">
        <!-- Default unchecked -->
       
      </th>
      <td>1</td>
      <td> Create User</td>
      <td>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="tableDefaultCheck1">
       
        </div>
      </td>
      
    </tr>
    <tr>
      <th scope="row">
        <!-- Default unchecked -->
       
      </th>
      <td>2</td>
      <td>Department</td>
      <td>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="tableDefaultCheck1">
       
        </div>
      </td>
     
    </tr>
    <tr>
      <th scope="row">
        <!-- Default unchecked -->
       
      </th>
      <td>3</td>
      <td>Roles</td>
      <td>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="tableDefaultCheck1">
       
        </div>
      </td>
    
    </tr>
    
  </tbody>
  <!-- Table body -->
</table>
<!-- Table  -->    
            <button class="btn btn-danger btn-lg float-center" style="margin-left:20%;margin-top:2%" type="submit" @click.prevent="AssignUserToRole(id);">
              ASSIGN ROLE
            </button>
          </fieldset>
    
      </div>
    </div>
    <!-- /form contact -->
  </div>

  <!--/col-->
</template>
<script>

import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
export default {
  name: "assignRolePage",
  mixins: [AppMixins],
    data() {
    return {
      
      formdata: {
        userEmail:"",
        rolesID:"",
        useremail:"",
        userbody:{},
    
      },
    };
  },
  methods: {
    async AssignUserToRole() {
  
  var userEmail =this.formdata.userEmail;
  var rolesID=this.formdata.rolesID;

  

 console.log("Roles new: ", userEmail,rolesID);
var response = await this.assigningRoles(rolesID);
if (response.code == "200") {
  swal.fire({
    html: `<h5 class="text-success">${response.message}</h5>`,
  });
} else {
  swal.fire({
    html: `<h5 class="text-danger">${response.message}</h5>`,
  });
}
},
   },
  }


</script>
<style>

</style>
