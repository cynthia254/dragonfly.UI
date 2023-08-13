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
    async editSerialNumber(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/EditSerialNumber",body)
      console.log("response is :",response);
      return response.data;
    },
    async ScannedData(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/ScannedData",body)
      console.log("response is :",response);
      return response.data;
    },
    async PDFPO(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/UploadPDFFile",body)
      console.log("response is :",response);
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
    async gettingItemById(itemid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetItemById?ItemId=${itemid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingBrandById(brandid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetBrandById?BrandId=${brandid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingitembybrandname(brandName){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GettingItemByBrandName?BrandName=${brandName}`)
      console.log("response",response);
      return response.data;
    },
    async gettinginvoicenumber(invoiceNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetInvoiceLinesByInvoiceNumber?invoiceNumber=${invoiceNumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettinginvoicebynumber(invoicenumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetInvoiceByNumber?InvoiceNumber=${invoicenumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettingproductbyId(itemID){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductDetailsbyid?itemID=${itemID}`)
      console.log("response",response);
      return response.data;
    },
    async gettingserilaNumber(batchID){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSerialNumber?itemID=${batchID}`)
      console.log("Product details by id:",response);
      console.log("response",response);
      return response.data;
    },
    async gettingreferenceNumber(reference_Number){
      console.log("reference number",reference_Number);
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductNumbering?reference=${reference_Number}`)
      console.log("response",response);
  
      return response.data;
    },
    
    async gettingproductlinebyid(id){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductlinebyid?product_line_id=${id}`)
      console.log("response",response);
      return response.data;
    },
    async gettingCustomerbyid(customerid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetCustomerByID?customerId=${customerid}`)
      console.log("response",response);
      return response.data;
    },
    async gwttingsupplierbyid(supplierid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSupplierbyId?supplierId=${supplierid}`)
      console.log("response",response);
      return response.data;
    },
    async addingroles(roleName){
      this.setAuthHeader();
      var resp=await axios.post(`Roles/CreateRole?Rolename=${roleName}`);
      return resp.data;

    },
    async gettingselectedserial(issueID) {
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSelectedByIssueID?issueID=${issueID}`);
    
      console.log("the body of selected serial is,", issueID);
      return resp.data;
    },
    
    async creatingBrand(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddBrand",body);
      return resp.data;

    },
    async creatinginvoice(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddInvoiceDetails",body);
      return resp.data;

    },
    async creatingCategory(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddCategory",body);
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
    async selectSerialNumber(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/SelectSerialNumber",body);
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
    async addingInvoiceItems(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddProductDetails",body);
      return resp.data;

    },
    async addingPurchases(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddPurchases",body);
      return resp.data;

    },
    
    async addingParts(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSpareParts",body);
      return resp.data;

    },
    async addingReturnedStock(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedStock",body);
      return resp.data;

    },
    async addingInvoiceLines(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddBatchDetails",body);
      return resp.data;

    },
    async gettingAllReturnedStock() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReturnedStock");

      return response.data;
    },
    async getitngAllBatch() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetInvoiceLines");

      return response.data;
    },
    async gettingAllSales() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSales");

      return response.data;
    },
    async gettingAllinvoiceitems() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetProductDetails");

      return response.data;
    },
    async gettingCategory() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllCategory");

      return response.data;
    },
    async gettingInvoice() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetInvoiceDetails");

      return response.data;
    },
    async getitngDevices() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSpareParts");

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
    async edititngStockOut(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditStockOut",body);
      return response.data;
    },
    async edititngBrand(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditBrand",body);
      return response.data;
    },
    async edititngStockIn(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditStockIn",body);
      return response.data;
    },
    async edititngSupplier(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditSupplier",body);
      return response.data;
    },
    async edititngItem(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditItem",body);
      return response.data;
    },
    
    async edititngcustomer(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditCustomer",body);
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
          async SearchingInvoice(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchInvoice?search_query=${searchword}`);
            return response.data;
          },
          async SearchingInvoiceLines(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchInvoiceLines?search_query=${searchword}`);
            return response.data;
          },
          async SearchingStockIn(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStockIn?search_query=${searchword}`);
            return response.data;
          },
          async SearchingStockOut(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStockOut?search_query=${searchword}`);
            return response.data;
          },
          async SearchingCustomers(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchCustomer?search_query=${searchword}`);
            return response.data;
          },
          async SearchingSuppliers(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchSupplier?search_query=${searchword}`);
            return response.data;
          },
          async uploadingbulk(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/upload_bulk",
            
            {
              body
            }
            
            );
            return response.data;
          },
          async GetUsersWithRole(roleId){
            this.setAuthHeader();
            var resp=await axios.post(`Roles/Total_Users_With_Role?roleid=${roleId}`);
            console.log("response of user roles from mixins :", resp.data);
            return resp.data;
          },
          async uploadingFiles(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/uploading",
            
            body, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async uploadingPO(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/UploadPODetails",
              body
            );
            return response.data;
          },
          async GettingAllPOS() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPOS");
      
            return response.data;
          },
          async uploadingPOitems(body){
            this.setAuthHeader();
            console.log(" form values details:  ", body);
            var response=await axios.post("Stock/UploadPOItems",
              body
            );
            return response.data;
          },
          async uploadingpoItems(body,poNumber){
            this.setAuthHeader();
            console.log(" form values:  ", body,poNumber);
            var response=await axios.post(`Stock/Uploading>>>?PONumber=${poNumber}`,
            
            body, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async uploadingPOFiles(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/UploadingPO>>>>>",
            
            body, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async gettimgitemsbypo(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetItemsByPO?PONumber=${poNumber}`)
            console.log("response",response);
            return response.data;
          },
          async gettingAllPOS() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPOSDetails");
      
            return response.data;
          },
          async gettingitemsinPO(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GettingItemInPO?PONumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async gettingAllPurchaseOrderss() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPurchaseOrderss");
      
            return response.data;
          },
          async addingPurchaseDetailss(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AddingPurchaseOrdersDetails`,body);
            return resp.data;
      
          },
          async adjustingstock(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AdjustStock`,body);
            return resp.data;
      
          },
          async issuingItems(id){
            console.log("passed mail: ", id)
            this.setAuthHeader();
            var response= await axios.post(`Stock/IssueProcess?id=${id}`)
            return response.data;
          },
          async gettingpoitemsByID(id){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetPOItemsbyID?ItemId=${id}`)
            console.log("response",response);
            return response.data;
          },
          async getstockadjustedById(itemID){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetAdjustedStockByID?ItemID=${itemID}`)
            console.log("response on adjustedcstock",response);
            return response.data;
          },
          async getFormbyId(id){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetFormByID?Id=${id}`)
            console.log("response on requisition form is:",response);
            return response.data;
          },
          async getFormbyemail(){

            this.setAuthHeader();
            var response=await axios.post("Stock/GetFormbyUserEmail")
            console.log("response on requisition form is:",response);
            return response.data;
          },
          async GettingAllStockItems() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllItemsStock");
      
            return response.data;
          },
          async applyingForm(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApplyingRequisitionForm`,body);
            return resp.data;
      
          },
          async GettingRequisiotin() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllRequisition");
      
            return response.data;
          },
          async ApplicationStatus(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApplicationStatus`,body);
            return resp.data;
      
          },
          async StatusPending() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetFormWithStatusPending");
      
            return response.data;
          },
          async StatusApproved() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetFormStatusWithApproved");
      
            return response.data;
          },
          async StatusNotIssued() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetNotIssuedSerial");
      
            return response.data;
          },
        }
   
}  
    
