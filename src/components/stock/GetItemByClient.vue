<template>
    <div class=""  style="background: green;">
      <link
        href="https://fonts.googleapis.com/css?family=Inter:500,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
      />
    
      <section  style="background-color: red;">
        <header class="top">
          <div class="img" style="width:40%; margin-left:5%;">
            <img
              alt=""
              class="payhouse-logo-1"  
              src="../../assets/images/payhouse.png"
            />
          </div>
          <nav
            style="
              margin-right: 90px;
              white-space: nowrap;
              color: white;
              margin-top: 15px;
            "
          >
            <ul>
              <li>
                <a
                  href="/stockdashboard"
                  style="font-size: 16px; font-family: inter; font-weight: medium"
                  >Home</a
                >
              </li>
              <li class="dropDown-menu fixed-top">
                <a
                  href=""
                  style="font-size: 16px; font-family: inter; font-weight: medium"
                  >Stock Users</a
                >
                <ul>
                  <li class="dropDown-menu fixed-top">
                    <a
                      href=""
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Recipient</a
                    >
                    <ul>
                      <li>
                        <a
                          href="/customer"
                          style="
                            font-size: 16px;
                            font-family: inter;
                            font-weight: medium;
                          "
                          >Manage Recipient</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="dropDown-menu fixed-top">
                    <a
                      href=""
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Suppliers</a
                    >
                    <ul>
                      <li>
                        <a
                          href="/supplier"
                          style="
                            font-size: 16px;
                            font-family: inter;
                            font-weight: medium;
                          "
                          >Manage Suppliers</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
    
              <li class="dropDown-menu fixed-top">
                <a
                  href=""
                  style="font-size: 15px; font-family: inter; font-weight: medium"
                  >Inventory</a
                >
                <ul>
                  <li>
                    <a
                      href="/brand"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage ProductBrand</a
                    >
                  </li>
                  <li>
                    <a
                      href="/addItem"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Item</a
                    >
                  </li>
                  <li>
                    <a
                      href="/category"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Category</a
                    >
                  </li>
    
                  <li>
                    <a
                      href="/device"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Devices</a
                    >
                  </li>
    
                  <li>
                    <a
                      href="/addStock"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Stock</a
                    >
                  </li>
                </ul>
              </li>
    
              <li style="">
                <a
                  style="
                    display: flex;
                    margin-left: 100px;
                    font-size: 16px;
                    font-family: inter;
                    font-weight: medium;
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule=""
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <p style="margin-left: 7px">
                    {{ userbody.firstName }} {{ userbody.lastName }}
                  </p></a
                >
              </li>
            </ul>
          </nav>
        </header>
      </section>
  
      </div>
      <div class="" style="margin-top: 30px;" >
     <select
       class="form-select"
       aria-label="Default select example"
       v-model="this.clientName"
     >
       <option selected disabled >select clientName</option>
       <option
         v-for="roles in this.allcustomers"
         v-bind:value="roles.companyName"
         :key="roles.customerId"
       >
         {{ roles.companyName }}
       </option>
     </select>
     <div class="mt-5">
       <h5 class="text-success">Items Under this Client</h5>
     </div>
     <table class="table">
       <thead>
         <tr>
           <th scope="col">Number</th>
           <th scope="col">Item Description</th>
           <th scope="col">Serial Number</th>
           <th scope="col">IMEI 1</th>
           <th scope="col">IMEI 2</th>
         </tr>
       </thead>
       <template
         v-for="(roleclaim, index) in this.rolecliamsfound"
         v-bind:key="roleclaim.id"
       >
         <tbody>
           <tr>
             <th scope="row">{{ index + 1 }}</th>
             <td>{{ roleclaim.brandName }} {{roleclaim.itemName}}</td>
             <td>{{ roleclaim.serialNumber }}</td>
             <td>{{ roleclaim.imeiI1 }}</td>
             <td>{{ roleclaim.imeI2 }}</td>
            
           </tr>
     
          
         </tbody>
       </template>
     </table>
   </div>
     
    
    
     
    </template>
 <script>
 import AppMixins from "../../Mixins/shared";
 export default {
   name: "ItemByClient",
   mixins: [AppMixins],
 
   data() {
     return {
        allcustomers: {},
       clientName: "",
       rolecliamsfound: {},
       texttext:"",
       userbody:{},
      
     };
   },
   methods: {
    async GetAllCustomers(){

const response= await this.gettingAllCustomers();
this.allcustomers=response.body;





console.log("allcustomers: ", this.allcustomers);
return response;

},
     async GetLoggedInUser() {
       var response = await this.Gettingloggedinuser();
       this.userbody = response.body;
       console.log("Logged in user __________ email:", this.userbody);
     },
 
     async getallroleClaims() {
  var clientName = this.clientName;
  console.log("Selected Client Name:", clientName); // Log the selected client name
  var response = await this.gettingItemByClient(clientName);
  console.log("Response from Server:", response); // Log the entire response object
  this.rolecliamsfound = response.body;
  console.log("Role Claims Found:", this.rolecliamsfound);
},

     
 
 
     },
     
   
   created() {
     this.GetAllCustomers();
     this.GetLoggedInUser();
   
   
   },
   watch: {
     clientName(valuefound) {
       console.log("old value watch: ", valuefound);
 
       this.getallroleClaims();
     },
   },
 };
 </script>
 <style>
 
 </style>
 