import axios from "axios";

export default {
  name: "AppMixins",
  methods: {
    setAuthHeader() {
      axios.defaults.baseURL = "http://localhost:5221/api";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
    },

    async registereduser(body) {
      console.log("__________________________sent body of registered user: ", body);
      this.setAuthHeader();

      var response = await axios.post("User/Register_User", body);
      console.log("registration response :", response);
      console.log("Response on register response:", response.data);
      return response.data;
    },
   
    async GettingAllUsers() {
      this.setAuthHeader();
      var response = await axios.get("User/GetAllUsers");

      return response.data;
    },
    async registeringTicket(body) {
      this.setAuthHeader();
      var response = await axios.post("Ticktes/RegisterTicket", body);
      return response.data;
    },
   


    async getAllTickets() {
      this.setAuthHeader();
      var response = await axios.get("Ticktes/GetAllTickets");
      console.log("All tickets out: ", response.data)
      return response.data;
    },

    async gettingticketbyid(ticketid){
      this.setAuthHeader();

      var response= await axios.post(`Ticktes/getticketbyid?ticketid=${ticketid}`)
      return response.data;
    },
    async gettinguserbyid(userId){
      this.setAuthHeader();

      var response= await axios.post(`User/getuserbyid?userId=${userId}`)
      return response.data;
    },
    async AssginingTicket(body){
      this.setAuthHeader();
      var resp= await axios.post('Ticktes/Assigntickettouser',body);

      return resp.data;
    },
    async confirmEmail(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/ConfirmUserMail?useremail=${useremail}`)
      return response.data;
    },
    async activateUser(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response= await axios.post(`User/ActivateUserAccount?useremail=${useremail}`)
      return response.data;
    },
    async editUser(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EditUser",body)
      return response.data;
    },
    async gettinguserbyemail(useremail){

      this.setAuthHeader();

      var response= await axios.post(`User/GetuserByEmail?useremail=${useremail}`);
    console.log("logging body:", response.body);
      return response.data;
    },

    async ResolvingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/resolveticket', body);
      return  resp.data;

    },
    async EscalatingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/escalateticket', body);
      return  resp.data;

    },
    async ClosingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/closeticket', body);
      return  resp.data;

    },
    async deletingUser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/DeleteUsers?usermail=${useremail}`);
      return resp.data;
    },
    async editinguser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/Edituseremail?newemail=${useremail}`);
      return resp.data;
    },
    async addingDepartment(body){
      this.setAuthHeader();
      var resp=await axios.post(`User/Add_Department`,body);
      return resp.data;

    },
  
    async GettingAllDepartment() {
      this.setAuthHeader();
      var response = await axios.get("User/GetAllDepartment");

      return response.data;
    },
    async gettingUserStatusById(){
      this.setAuthHeader();
      var response=await axios.get(`User/GetUserActiveStatusByid`);
      return response.data;


    },
    async addingroles(roleName){
      this.setAuthHeader();
      var resp=await axios.post(`Roles/CreateRole?Rolename=${roleName}`);
      return resp.data;

    },
    async GettingAllRoles() {
      this.setAuthHeader();
      var response = await axios.get("Roles/GetAllRoles");

      return response.data;
    },
    async GettingDepartmenbyid(id){
      this.setAuthHeader();
      var response= await axios.post(`User/Getdepartmentbyid?departmentid=${id}`);
      return response.data;
    },
    async assigningRoles(rolesID,usermail){
      this.setAuthHeader();
      var response=await axios.get(`Roles/AssignUserToRole?useremail=${usermail}&roleid=${rolesID}`);
      return response.data;


    },
    async SuspendingUsers(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('User/Suspend_user', body);
      return  resp.data;

    },
    async Gettingloggedinuser(){
      this.setAuthHeader();
      var response=await axios.get(`User/LoggedInUser`);
      return response.data;
    }, 
    async changingUserStatus(body){
      this.setAuthHeader();
      var response=await axios.post("User/Change_UserStatus",body);
      return response.data;
    },
    async gettingUserById(userid){
      this.setAuthHeader();
      var response=await axios.post(`User/getuserbyid?userId=${userid}`)
      return response.data;
    },
    async addingDesignations(body){
      this.setAuthHeader();
      var resp=await axios.post(`User/CreateDesignation`,body);
      return resp.data;

    },
    async GettingAllDesignation() {
      this.setAuthHeader();
      var response = await axios.get("User/Getalldesignation");

      return response.data;
    },
    async GettingDesignationById(postionId){
      this.setAuthHeader();
      var response= await axios.post(`User/Getdesignationbyid?PositionId=${postionId}`);
      return response.data;
    },

    async editingDesignation(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EdutDesignation",body)
      return response.data;
    },
    async GettingAllResponsibility(){
      this.setAuthHeader();
      var response=await axios.get("Roles/AllClaims");
      return response.data;
    },
    async addRoleClaim(roleclaimname){
      this.setAuthHeader();
      var response=await axios.post(`Roles/AddRoleClaim?roleclaimname=${roleclaimname}`);
      return response.data;
    },
   async gettingRolesById(rolesID){
    this.setAuthHeader();
    var response =await axios.post(`Roles/Getrolebyid?Roleid=${rolesID}`);
    return response.data;
   },
    
   async addingclaimstoRoles(claimid, roleid){
     this.setAuthHeader();

     var resp=  await axios.post(`Roles/AddClaimstoRoles?roleid=${roleid}&claimid=${claimid}`);

     return resp.data;

   },
   async gettingallroleClaims(roleided){

    var resp= await axios.post(`Roles/GetAllroleClaims?roleid=${roleided}`);
    return  resp.data;
   }
   
   

  
  },
};
