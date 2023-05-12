<template>
  <div class="">
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <!-- Default form -->

        <form action="" class="pad-bg">
          <h1 class="text-center">Grant Permission</h1>
          <div class="form-group">
            <label for="">Select Roles</label>
            <div class="mb-4 pb-2" style="width: 100%">
              <select
                class="checkbox"
                style="width: 100%; height: 50px; background-color: white"
                v-model="this.roleIdPassed"
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
          </div>
          <div class="" v-if="this.notaddedtorole">
            <small class="text-danger" style="font-style: italic">
              {{ this.message }}
            </small>
          </div>
          <div class="text-success text-center" v-if="this.successfullycreated">
            <small class="" style="font-style: italic">
              {{ this.message }}
            </small>
          </div>

          <div class="form-group">
            <!-- Table  -->
            <table class="table table-bordered">
              <!-- Table head -->
              <thead>
                <tr>
                  <th>Responsibilities Id</th>
                  <th>Responsibilities</th>
                  <!-- <th>Chosen</th> -->
                </tr>
              </thead>
              <!-- Table head -->

              <!-- Table body -->
              <tbody>
                <template
                  v-for="responsibility in this.allresponsibility"
                  v-bind:key="responsibility.id"
                >
                  <tr
                    class="tablerowclass"
                    @click.prevent="
                      AddRoleClaim(responsibility.rolesClaimsTableId)
                    "
                  >
                    <td>{{ responsibility.rolesClaimsTableId }}</td>
                    <td>{{ responsibility.claimName }}</td>
                    <!-- <td> -->
                    <!-- <div class="" v-if="this.ischosentrue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                          />
                        </svg>
                      </div>
                      <div class="" v-if="this.isnotchosen">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div> -->
                    <!-- <div  v-if="showspinner" class="spinner-grow spinner-grow-sm" role="status">
                        <span class="sr-only"></span>
                      </div> -->
                    <!-- </td> -->
                  </tr>
                </template>
              </tbody>
              <!-- Table body -->
            </table>
            <!-- 
         claim name : {{ this.nameofclaim }} -->
          </div>
          <!-- <button
            class="btn btn-danger btn-lg float-center"
            style="margin-left: 20%; margin-top: 4%"
            type="submit"
          >
            SUBMIT
          </button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import swal from "sweetalert2";
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "AddClaimToRoles",
  mixins: [AppMixins],
  data() {
    return {
      formdata: {
        roleName: "",
        rolesID: "",
      },
      userbody: {},
      rolebody: {},
      allroles: {},
      allresponsibility: {},
      allusers: {},
      nameofclaim: "",
      texttext: "",
      ischosentrue: false,
      isnotchosen: true,
      roleIdPassed: "",
      message: "",
      showspinner: true,
      successfullycreated: false,
      notaddedtorole: false,
    };
  },
  methods: {
    async GetAllRoles() {
      const response = await this.GettingAllRoles();
      this.allroles = response.body;

      console.log("allroles: ", this.allroles);
      return response;
    },

    async getallusers() {
      const response = await this.GettingAllUsers();
      this.userbody = response.body;
      console.log("allusers: ", this.userbody);
    },
    async GetAllRolecLaims() {
      const response = await this.GettingAllResponsibility();
      this.allresponsibility = response.body;
      this.nameofclaim = this.allresponsibility.claimName;
      console.log("name of claim:", this.nameofclaim);
      console.log("all claims:   : ", this.allresponsibility);
    },

    async AddRoleClaim(claimid) {
      if (this.roleIdPassed === "empty string") {
        this.message ==
          "Kindly select a role first before trying to add a claim";
      }
      this.texttext = claimid;

      console.log("passded id ___", claimid);

      console.log(" role id passed here : _____}}}_____", this.roleIdPassed);

      var response = await this.addingclaimstoRoles(claimid, this.roleIdPassed);
      console.log("the RESPONSE is here _________", response);
      if (response.isTrue === true) {
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

  watch: {
    deep: {
      nameofclaim(newvalue) {
        console.log("newvalue:_______", newvalue);
      },
    },
  },
  created() {
    this.GetAllRoles();

    this.GetAllRolecLaims();
  },
};
</script>

<style>
.pad-bg {
  background: #f8f8f8;
  padding: 40px 20px;
  border-radius: 5px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid #e5e5e5;
  margin-left: 80px;
}
.tablerowclass {
  cursor: pointer;
}
.tablerowclass:hover {
  background-color: black;
  color: white;
}
</style>
