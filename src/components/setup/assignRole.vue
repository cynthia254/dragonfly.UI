<template>
  <div class="col-md-6" style="margin-left: 30%">
    <span class="anchor" id="formContact"></span>
    <hr class="my-5" />
    <!-- form contact -->
    <div class="card card-outline-secondary">
      <div class="card-header">
        <h3 class="mb-0">Assign Role To User</h3>
      </div>
      <div class="card-body">
        <form autocomplete="off" class="form" role="form">
          <fieldset>
            <label class="mb-0">Email</label>
            <div class="row mb-1">
              <div class="col-lg-12">
                <input class="form-control" v-model="this.formdata.userEmail" type="text" />
              </div>
            </div>
            <label class="mb-0">Role ID</label>
            <div class="row mb-1">
              <div class="col-lg-12">
                <input class="form-control" v-model="this.formdata.rolesID" rows="6" />
              </div>
            </div>
            <button class="btn btn-secondary btn-lg float-right" type="submit" @click.prevent="AssignUserToRole(id);">
              ASSIGN ROLE
            </button>
          </fieldset>
        </form>
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
