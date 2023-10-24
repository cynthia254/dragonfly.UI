<template>
   <header>
        <h1>PAYHOUSE</h1>
        <nav>
            <ul>
                <li>
                    <a href="/stockdashboard" >Home</a>
                </li>
                <li class="dropDown-menu">
                    <a href="" >Access Management</a>
                    <ul>
                        <li class="dropDown-menu">
                            <a href="" >Role Management</a>
                            <ul>
                               
                                <li><a href="/rolestable" >View Roles</a></li>
                                <li><a href="/roles" >Add Roles</a></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu">
                            <a href="" >Responsibilites</a>
                            <ul>
                              
                                <li><a href="/responsibilityTable" >View Responsibility</a></li>
                                <li><a href="/responsibility" >Add responsibility</a></li>
                                <li><a href="/addclaimtorole" >Grant Permission</a></li>
                                <li><a href="/allroleclaims" >View Responsibility assigned to role</a></li>
                              
                            </ul>                        
                        </li>
                    </ul>
                </li>
            
               
                <li class="dropDown-menu">
                    <a href="" >Team</a>
                    <ul>
                        <li >
                            <a href="/addusers" >Add Users</a>                       
                        </li>
                        <li><a href="/viewusers" >Manage Users</a></li>
          
                    </ul>
                </li>
                <li class="dropDown-menu">
                    <a href="" target="">Setup</a>
                    <ul>
                        <li >
                            <a href="/settings">Office Settings</a>                       
                        </li>
                        <li><a href="" >Vendor Setup</a></li>
                        <li >
                            <a href="" >Client Setup</a>                       
                        </li>
                        <li><a href="" >Call Center setup</a></li>
          
          
                    </ul>
                </li>
              
                <li class="dropDown-menu">
                    <a href="" >Service Desk</a>
                    <ul>
                        <li >
                            <router-link to="/tickets" >Manage Tickets</router-link>                       
                        </li>
                        <li><router-link to="/newticket"> Create Ticket</router-link></li>
                        <li >
                            <router-link to="/viewclients" >Manage Clients</router-link>                       
                        </li>
                       
          
          
                    </ul>
                </li>
                <li class="dropDown-menu fixed-top">
                  <a class="admin_name" style="">Hi, {{userbody.firstName}} {{ userbody.lastName }}</a>
                  <ul>
                        <li >
                            <router-link to="/userProfile" >Profile Settings</router-link>                       
                        </li>
                        <li><router-link to="/customer" >Customer Portal</router-link></li>
                        <li >
                            <router-link to="/changePassword" >Change Password</router-link>                       
                        </li>
                        <li><router-link to="/" >SignOut</router-link></li>
          
          
                    </ul>
                </li>
                
            </ul>
        </nav>
    </header>
   
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
        <div class="messages-container">
      <div class="dangerous" v-if="notaddedtorole && showError">
        <small class="error-message">
          {{ message }}
        </small>
      </div>
      <div class="successfull text-center" v-if="successfullycreated && showSuccess">
        <small class="success-message">
          {{ message }}
        </small>
      </div>
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
      showError: false,
      showSuccess: false,
    };
  },
  methods: {
    async GetAllRoles() {
      const response = await this.GettingAllRoles();
      this.allroles = response.body;
    },
    async getallusers() {
      const response = await this.GettingAllUsers();
      this.userbody = response.body;
    },
    async GetAllRolecLaims() {
      const response = await this.GettingAllResponsibility();
      this.allresponsibility = response.body;
      this.nameofclaim = this.allresponsibility.claimName;
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
    },
    async AddRoleClaim(claimid) {
  if (!claimid || !this.roleIdPassed) {
    this.message = "Kindly select a role first before trying to add a claim";
    this.showError = true;
    this.showSuccess = false;
    setTimeout(() => {
      this.showError = false;
    }, 3000);
    return;
  }

  // ... (rest of the method)

  var response = await this.addingclaimstoRoles(claimid, this.roleIdPassed);
  if (response.isTrue === true) {
    this.notaddedtorole = false;
    this.successfullycreated = true;
    this.showSuccess = true;
    this.showError = false;
    this.message = response.message;
    setTimeout(() => {
      this.showSuccess = false;
    }, 4000);
  } else {
    this.successfullycreated = false;
    this.notaddedtorole = true;
    this.showSuccess = false;
    this.showError = true;
    this.message = response.message;
    setTimeout(() => {
      this.showError = false;
    }, 4000);
  }
},

},
  created() {
    this.GetAllRoles();
    this.GetLoggedInUser();
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

/* Updated styles for the messages container */
.messages-container {
  position: fixed;
  top: 51px; /* Adjust this value to your desired distance from the top */
  left: 0;
  right: 0;
  z-index: 999; /* Ensure the messages appear above other content */
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically and horizontally */
  flex-direction: column;
  padding: 10px;
  width: 100%;
}

/* Updated style for error messages */
.dangerous {
  background-color: rgb(245, 112, 112);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; /* Center text vertically and horizontally */
}

/* Updated style for success messages */
.successfull {
  background-color: rgb(144, 243, 144);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center; /* Center text vertically and horizontally */
}

/* Your existing styles for error-message and success-message */
.error-message,
.success-message {
  font-style: bold;
  font-size: 20px;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}




header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    padding: 0px 15px;
}
header h1 {
    margin: 0px;
    color: red;
}
nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
}
nav > ul > li {
    position: relative;
    padding: 25px 15px;
}
nav ul li a {
    text-decoration: none;
    color: black;
}
nav ul li a:active {
    color: red;
}
nav ul li a:visited {
    color: red;
}
nav ul li a:hover {
    color: green;
}
.dropDown-menu {
    position: relative;
}
nav > ul > .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #666 transparent transparent transparent;
    position: absolute;
    top: 30px;
    right: 0px;
}
nav > ul > .dropDown-menu:hover:after {
    border-width: 0px 5px 5px 5px;
    border-color: transparent transparent green transparent;
}
nav > ul > .dropDown-menu .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #666;
    position: absolute;
    top: 16px;
    right: 10px;
    overflow: hidden;
}
nav > ul > .dropDown-menu .dropDown-menu:hover:after {
    border-width: 5px 5px 5px 0px;
    border-color: transparent #666 transparent transparent;
}
nav .dropDown-menu > ul {
    list-style: none;
    margin: 24px 0px 0px;
    padding: 12px 0px;
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
    display: none;
}
nav .dropDown-menu .dropDown-menu > ul {
    margin: 0px 0px 0px;
    left: 100%;
    top: 0px;
}
nav .dropDown-menu .dropDown-menu.left > ul {
    left: auto;
    right: 100%;
}
nav .dropDown-menu:hover > ul {
    display: block;
}
nav .dropDown-menu li a {
    display: block;
    padding: 12px 12px;
}
</style>
