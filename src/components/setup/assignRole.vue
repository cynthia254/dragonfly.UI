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
              <input class="form-control" type="text text-dark" v-model="this.usermail" />
            </div>
          </div>
          <label class="mb-0">Roles</label>

          <div class="mb-4 pb-2" style="width: 100%">
            <select
              class="checkbox"
              style="width: 100%; height: 50px; background-color: white"
              v-model="this.rolesID"
            >
              <option
                v-for="roles in this.allroles"
                v-bind:value="roles.rolesID"
                :key="roles.rolesID"
              >
                {{ roles.roleName }}
              </option>
            </select>
          </div>

          <!-- Table  -->
          <button
            class="btn btn-danger btn-lg float-center"
            style="margin-left: 20%; margin-top: 2%"
            type="submit"
            @click.prevent="AssignUserToRole(id)"
          >
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
import AppMixins from "../../Mixins/shared";
export default {
  name: "assignRolePage",
  mixins: [AppMixins],
  data() {
    return {
      
      userbody: {},
      rolebody: {},
      allroles: {},
      allresponsibility: {},
      allusers: {},
      rolesID: "",
      usermail:""
    };
  },
  methods: {
    async AssignUserToRole() {
      
      var roleided= this.rolesID;

      console.log(" the role id :  _________", roleided);
      var usermailer=this.usermail;
      var response = await this.assigningRoles(roleided,usermailer) ;

      console.log(" whta is response _______", response)
      if (response.isTrue==true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
    },
    async GetAllRoles() {
      const response = await this.GettingAllRoles();
      this.allroles = response.body;

      console.log("allroles: ", this.allroles);
      return response;
    },
    async getallusers() {
      const response = await this.GettingAllUsers();
      this.userbody = response.body;

      //this.usermail=response.body.email;
      console.log("allusers: ", this.userbody);
      return response;
    },
    async GetAllRolecLaims() {
      const response = await this.GettingAllResponsibility();
      this.allresponsibility = response.body;

      console.log("allresponsibility: ", this.allresponsibility);
      return response;
    },

    async  getuserbyid(){
       var idofuser=  this.userId;
      const resp=await this.gettinguserbyid(idofuser);
      this.userbody=resp.body; 
      
      this.usermail=resp.body.email
      console.log("user:",this.userbody);
    
    },
  },
  created() {
    this.GetAllRoles();
    this.userId = this.$route.params.userId;
    console.log("user id :", this.userId);
    this.getuserbyid();

  },
};
</script>
<style></style>
