<template>
  <section class="homesection"></section>
  <header class="fixed-top">
    
      
      <h1>PAYHOUSE</h1>
      <nav>
            <ul>
                <li>
                    <a href="/viewusers" >Home</a>
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
                  <a class="admin_name" style="">Hi, {{logbody.firstName}} {{ logbody.lastName }}</a>
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
  <div class="col-md-10" style="margin-left: 10%;margin-top:110px">
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
              <input class="form-control" type="text text-dark" v-model="this.usermail" disabled style=" background-color: #f0f0f0; /* Apply a gray background color */
  color: black; " />
            </div>
          </div>
          <label class="mb-0">Roles</label>
<div class="mb-4 pb-2" style="width: 100%">
  <div v-for="role in allroles" :key="role.rolesID">
    <label>
      <input
        type="checkbox"
        :value="role.rolesID"
        v-model="rolesID"
       
      />
      {{ role.roleName }}
    </label>
  </div>
</div>

           
          

          <!-- Table  -->
         <!-- ... (your existing code) -->

<div class="row mb-3">
  <div class="col-md-6">
    <router-link to="/viewusers"><button class="btn btn-danger btn-lg">Go Back</button></router-link>
  </div>
  <div class="col-md-6">
    <button class="btn btn-success btn-lg " @click.prevent="AssignUserToRole(id)" style="margin-left:300px">ASSIGN ROLE</button>
  </div>
</div>

<!-- ... (your existing code) -->

        </fieldset>
      </div>
    </div>
    <!-- /form contact -->
  </div>

  <!--/col-->
</template>
<script>
import Multiselect from 'vue-multiselect'
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "assignRolePage",
  mixins: [AppMixins],
  components: [Multiselect] ,
  data() {
 
    return {
      
      userbody: {},
      rolebody: {},
      allroles: {},
      allresponsibility: {},
      allusers: {},
   rolesID: [],
      usermail:"",
      logbody:{},
      
    };
  },
  methods: {
    
    async AssignUserToRole() {
   var roleIds =this.rolesID; // Convert the single role ID to an array
   var userId = this.userId;
   const allvalues=[];
     for(let i=0; i<roleIds.length;i++){
         allvalues.push(roleIds[i]);
     }
     
   console.log("roleIds: tester __________:::::",allvalues);
  console.log("userId:", userId);

   try {
     var response = await this.assigningMultipleRoles(userId, allvalues);
     if ( response.code=="200") {
       swal.fire({
         html: `<h5 class="text-success">${response.message}</h5>`,
       });
        // Fetch updated data and perform any necessary actions
   
    this.$router.push({
      path: `/assignRole/${this.userId}`,
      replace: true,
    });

    // Reload after a short delay
    setTimeout(() => {
      location.reload();
    }, 700);
     } else {
       swal.fire({
         html: `<h5 class="text-danger">${response.message}</h5>`,
       });
     }
   } catch (error) {
     console.error(error);
     // Handle error here
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
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.logbody = response.body;
      console.log("Logged in user __________ email:", this.logbody);
    },
  },
  created() {
    this.GetAllRoles();
    this.userId = this.$route.params.userId;
    console.log("user id :", this.userId);
    this.getuserbyid();
    this.GetLoggedInUser();

  },
};
</script>
<style>
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
    overflow: hidden;
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
