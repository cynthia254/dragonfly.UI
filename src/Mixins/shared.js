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
      var response = await axios.post("Tickets/RegisterTicket", body);
      return response.data;
    },
   


    async getAllTickets() {
      this.setAuthHeader();
      var response = await axios.get("Tickets/GetAllTickets");
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
    async changeUserStatus(body){
      this.setAuthHeader();
      var resp= await axios.post('Stock/ChangePurchaseStatus',body);

      return resp.data;
    },
    async changeSalesStatus(body){
      this.setAuthHeader();
      var resp= await axios.post('Stock/ChangeSalesStatus',body);

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
    async gettingStockByName(itemname){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockByName?itemname=${itemname}`)
      return response.data;
    },
    async gettingStockbyid(stockid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockById?itemid=${stockid}`)
      console.log("response",response);
      return response.data;
    },
    async gettinPurchaseById(purchaseid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetPurchaseById?purchaseId=${purchaseid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingSalesbyId(salesid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSalesbyId?salesId=${salesid}`)
      console.log("response",response);
      return response.data;
    },
    async addingroles(roleName){
      this.setAuthHeader();
      var resp=await axios.post(`Roles/CreateRole?Rolename=${roleName}`);
      return resp.data;

    },
    async creatingBrand(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddBrand",body);
      return resp.data;

    },
    async creatingReturnedStatus(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedStatus",body);
      return resp.data;

    },

    async creatingItem(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddItem",body);
      return resp.data;

    },
    async addingStock(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddStock",body);
      return resp.data;

    },
    async addingCustomer(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddCustomer",body);
      return resp.data;

    },
    async addingSupplier(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSupplier",body);
      return resp.data;

    },
    async addingSales(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSales",body);
      return resp.data;

    },
    async addingPurchases(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddPurchases",body);
      return resp.data;

    },
    async addingReturnedStock(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedStock",body);
      return resp.data;

    },
    async gettingAllReturnedStock() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReturnedStock");

      return response.data;
    },
    async gettingAllSales() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSales");

      return response.data;
    },
    async gettingAllPurchases() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllPurchases");

      return response.data;
    },
    async gettingAllReturnedStatus() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReturnedStatus");

      return response.data;
    },
    async gettingAllSuppliers() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSuppliers");

      return response.data;
    },
    async gettingAllCustomers() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllCustomers");

      return response.data;
    },
    async gettingAllStock() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllStock");

      return response.data;
    },
    async gettingAllBrands() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllBrands");

      return response.data;
    },
    async gettingAllItems() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllItems");

      return response.data;
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
    async updatingstock(stockeid, quantityadded){
      this.setAuthHeader();
      var response =await axios.post(`Stock/UpdateStockQuantity?itemid=${stockeid}&quantityadded=${quantityadded}`);
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
    async gettinguserotherroles(id){
      this.setAuthHeader();
      var response=await axios.post(`Roles/GetUserOtherRoles?userid=${id}`);
      return response.data;
    },

    async editingDesignation(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EdutDesignation",body)
      return response.data;
    },
    
    async edititngDepartment(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EditDepartment",body)
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
   async deletingClaimTorole(claimes, roleidepoass){
    this.setAuthHeader();

    var resp=  await axios.post(`Roles/Deleteroleclaim?ClaimId=${claimes}&roleid=${roleidepoass}`);
    console.log("roleid:",claimes,roleidepoass);

    return resp.data;

  },
  async deleteRole(roleName){
    this.setAuthHeader();
    var resp=await axios.post(`Roles/DeleteRole?RoleName=${roleName}`);
    console.log("rolename:",roleName);
    return resp.data;
  },
  async deleteDepartment(departmentName){
    this.setAuthHeader();
    var resp=await axios.post(`User/DeleteDepartment?DepartmentName=${departmentName}`);
    console.log("departmentname:",departmentName);
    return resp.data;
  },
  async deletingDesignations(positionName){
    this.setAuthHeader();
    var resp=await axios.post(`User/DeleteDesignation?PositionName=${positionName}`);
    console.log("designationname:",positionName);
    return resp.data;
  },
  async deletingResponsibility(rolesClaimsTableId){
    this.setAuthHeader();
    var resp=await axios.post(`Roles/DeleteResponsibility?ClaimId=${rolesClaimsTableId}`);
    console.log("designationname:",rolesClaimsTableId);
    return resp.data;
  },
   async gettingallroleClaims(roleided){

    var resp= await axios.post(`Roles/GetAllroleClaims?roleid=${roleided}`);
    return  resp.data;
   },
   async SendingUserMail(usermail){
    this.setAuthHeader();
       console.log("logger areas _________", usermail)
    var resp= await axios.post(`User/Send_Forget_Password_Link?useremail=${usermail}`);
    return resp.data;
   },
   async ResetingPassword(body){
    this.setAuthHeader();
    var response=await axios.post("User/Reset_user_Password", body);
    return response.data;

   },
   async ChangePassword(body){
    this.setAuthHeader();
    var response=await axios.post("User/Update_password",body);
    return response.data;

   },
   async AssignotherRoles(){
    this.setAuthHeader();
    var response=await axios.post("Roles/AssignUserOtherRoles");
    return response.data;

   },

   async GettingUserRoleByUserId(userid)
        {
              this.setAuthHeader();
              var response= await axios.post(`Roles/GetRoleByUserId?userid=${userid}`);
              return response.data;
        },
      

        async SearchingUsers(searchword){
             this.setAuthHeader();
           var response= await axios.post(`User/SearchUsers?search_query=${searchword}`);
           return response.data;
          },
          async SearchingStock(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStock?search_query=${searchword}`);
            return response.data;
          },
          async GetUsersWithRole(roleId){
            this.setAuthHeader();
            var resp=await axios.post(`Roles/Total_Users_With_Role?roleid=${roleId}`);
            console.log("response of user roles from mixins :", resp.data);
            return resp.data;
          }
        }
   
}  
    
