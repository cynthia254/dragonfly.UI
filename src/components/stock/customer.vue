<template>
     <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
     
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
     <section>
            <header class="top">
              <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
    <nav style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
       <ul>
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
               <ul>
                 <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
               </ul>
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
               <ul>
                 <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
               </ul>
             </li>
           </ul>
         </li>

         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
           <ul>
             <li>
               <a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a>
             </li>
             <li>
               <a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a>
             </li>
             <li>
               <a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a>
             </li>
             
             <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices</a></li>

             <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
           </ul>
         </li>
      
         <li style="">
           <a style="display: flex;margin-left:100px;font-size: 16px;font-family:inter;font-weight:medium"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg><p style="margin-left:7px;">{{userbody.firstName}} {{userbody.lastName}}</p></a>
         </li>
         
       </ul>
     </nav>
    </header>
    </section>
  <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;height: 71px;"
                  >
                    <div class="row" >
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-top:10px;
line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                          CUSTOMER LIST
                        </h2>
                      </div>

                  
                      <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 130px;
                            margin-left: 240%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 10px;font-family:inter;">Add Recipient</h2>
              
            </button>
              </div>
              <transition name="modal">
                <div
                  id="purchaseModal"
                  class="modal-mask fixed-top"
                  v-if="showModal"
                  style="
                    position: fixed;
                    width: 100%;
                    margin-left: 0px;
                    margin-top: 0px;
                    align-content: center;
                    align-items: center;
                  "
                >
                  <div
                    class="modal-wrapper"
                    style="vertical-align: middle; display: table-cell"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      style="
                        align-content: center;
                        margin-top: 40px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content"
                        style="  width: 50%;
                                  margin-left: 120px;
                                  margin-top: 80px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                            Add Recipient
                          </h4>
                          <button
                            @click="showModal = false"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            style="margin-right: 30px"
                          ></button>
                        </div>
                        <div
                          class="modal-body"
                          style="
                            width: 60%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form method="post" id="purchaseForm">
                            <input
                              type="hidden"
                              name="purchase_id"
                              id="purchase_id"
                            />
                            <input
                              type="hidden"
                              name="btn_action"
                              id="btn_action"
                            />

                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Recipient Name</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="quantity"
                                  id="quantity"
                                  class="form-control rounded-0"
                                  required
                                  v-model="this.formdata.customerName"
                                  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Company</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="quantity"
                                  id="quantity"
                                  class="form-control rounded-0"
                                  required
                                  v-model="this.formdata.companyName"
                                  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Email Adress</label>
                              <div class="input-group">
                                <input
                                  type="email"
                                  name="quantity"
                                  id="quantity"
                                  class="form-control rounded-0"
                                  required
                                  v-model="this.formdata.email"
                                  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"

                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Phone Number</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="quantity"
                                  id="quantity"
                                  class="form-control rounded-0"
                                  required
                                  v-model="this.formdata.phoneNumber"
                                  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                />
                              </div>
                            </div>

                            <div class="form-group" style="margin-top:10px">
                              <input
                              @click.prevent="AddingCustomer();"
                                type="submit"
                                name="action"
                                id="action"
                                class="btn btn-success btn-sm"
                                value="Add"
                                form="purchaseForm"
                                style="margin-bottom: 20px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
                              />
                            
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >

              <div class="row mx-5">
                         </div>

                <div class="table-wrapper" v-if="showallstockin">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <div class="search-container" style="margin-top: 30px; display: flex; align-items: center;">
    <p style="margin-right: 10px;margin-top: 10px;">Search:</p>
    <input type="text" v-model="search" id="table-search" placeholder="Search...">

  </div>
                        <table id="purchasing" class="table table-hover ">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr>
                          <th style="width: 30px;">ID</th>
                          <th>Recipient Name</th>
                          <th>Company</th>
                          <th>Email Adress</th>
                          <th>Phone Number</th>
                          <th style="width: 120px">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="customers in filteredBrands" v-bind:key="customers.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                          <th scope="row">{{ customers.customerId }}</th>
                          <td>{{customers.customerName}}</td>
                          <td>{{customers.companyName}}</td>
                          <td>{{customers.email}}</td>
                          <td>{{customers.phoneNumber}}</td>

                          <td>
                            <div class="dropdown" >
                              <button style="background-color: rgb(231, 226, 226);width: 70%;" type="button" class="btn btn-flat btn-default btn-sm dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                            Action
                                    </button>   <div class="dropdown-content" style="color: blue; ">
                <a href="#" style="font-weight: lighter;"   @click="editCustomer(customers.customerId) ">
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  
                                
                                  style="margin-left:10px"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>
Edit </a>
              
<a href="#" @click="viewCustomer(customers.companyName)">
  <svg xmlns="http://www.w3.org/2000/svg" style="margin-left:10px" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
View </a>
              </div>
              </div>
                               
                             
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>

</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: "clientPage",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      showallstockin:true,
     showallstocksearchin:false,
      allcustomers:{},
      userbody: {},
   
      formdata: {
        customerName:"",
        companyName:"",
        email:"",
        phoneNumber:"",
        

    
      },
      searchword:"",
      allcustomer:{},
      search:'',
    };
  },
  computed: {
  filteredBrands() {
    return this.allcustomers.filter((customers) =>
      customers.customerName.toLowerCase().includes(this.search.toLowerCase())
    );
  },
},
  methods:{
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
async editCustomer(customerId) {
      console.log("customer id is:", customerId);
      this.$router.push({
        path: `/editcustomer/${customerId}`,
        replace: true,
      });
    },
    async viewCustomer(companyName) {
      console.log("customer id is:", companyName);
      this.$router.push({
        path: `/viewCustomer/${companyName}`,
        replace: true,
      });
    },
    async AddingCustomer() {
  
  var body={
    customerName:this.formdata.customerName,
    companyName:this.formdata.companyName,
    email:this.formdata.email,
    phoneNumber:this.formdata.phoneNumber,
  }

  

 console.log("customer new: ", body);
var response = await this.addingCustomer(body);
if (response.isTrue==true) {
  swal.fire({
    html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });
} else {
  swal.fire({
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });

      }
      this.GetAllCustomers();
    },
    async searchstocksin() {
      this.showallstockin = false;
      this.showallstocksearchin = true;
      var resp = await this.SearchingCustomers(this.searchword);
      this.allcustomers= resp.body;
      console.log("search  return body: ", resp.body);
    },

  },
  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchstocksin();
      } else {
        this.GetAllCustomers();
      }
    },
  },
  created(){
    this.GetAllCustomers();
    this.GetLoggedInUser();
  },
  mounted() {
  // Initialize DataTable after the component is mounted and the table is in the DOM
  this.GetAllCustomers().then(() => {
    this.$nextTick(() => {
      const dataTable = $('#purchasing'); // Get a reference to the table element
      
      // Initialize DataTable with your desired options
      dataTable.DataTable({
        paging: false,
        searching: false,
        responsive: true,
        // Other DataTable options here as needed
      });
      
      // Add an event listener for the search event
      dataTable.on("search.dt", () => {
        const searchValue = dataTable.DataTable().search(); // Get the search query
        console.log("Search Query:", searchValue);
        
        // You can further process or log the search query here
      });
    });
  });
}
  }

</script>
<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
