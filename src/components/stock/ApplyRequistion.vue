<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
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
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb " class="bg-light  p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Requisition Forms</li>
          </ol>
        </nav>
      </div>
    </div>
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
                         REQUISITION FORM LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 200px;
                            margin-left: 200%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Apply Requisition Form</h2>
              
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
                        margin-top: 10px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content"
                        style=" width: 70%;
                                  margin-left: 50px;
                                  margin-top: 5px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:70%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                           Apply Requisition Form 
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
                            width: 70%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form  id="purchaseForm" ref="myForm">
                            <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Stock Need:</label>
                                    <select name="" id="" class="form-select rounded-0" required v-model="this.formdata.stockNeed"  style="background-color: #f5f5f5;font-family: inter;font-size: 15px;color: gray;">
                                        <option value="" disabled>Select StockNeed</option>
                                        <option value="Internal Request">Internal Request</option>
                                        <option value="Customer Order">Customer Order</option>
                                              </select>
                                              </div>
                                        </div>
                              
                    <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Brand Name:</label>
                                    <select name="" id="" class="form-select rounded-0" required v-model="this.formdata.brandName"  style="background-color: #f5f5f5;font-family: inter;font-size: 15px;color: gray;">
                                        <option value="" disabled>Select BrandName</option>
                                        <option  v-for="brands in this.allbrands"
                                              v-bind:value="brands.brandName"
                                              :key="brands.brandId">{{brands.brandName}}</option>
                                              </select>
                                              </div>
                    </div>
                    </div>
                    
                   
                                      <div class="">
                                        <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Quantity:</label>
                                <input 
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 v-model="this.formdata.quantity"
                                />
                                              </div>
                                        </div>
                                        <div class="" >
                            <div  class="form-group" v-if="datearea" >
                                <label style="font-family: inter;font-size: 16px;white-space: nowrap;">Device Being Repaired:</label>
                                <input 
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5;width: 100%;"
                                 v-model="this.formdata.deviceRepaired"
                                />
                                   
                                              </div>
                    </div>
                   
                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Department Name:</label>
                                    <select name="" id="" class="form-select rounded-0" required v-model="this.formdata.departmentName"  style="background-color: #f5f5f5;font-family: inter;font-size: 15px;color: gray;">
                                        <option value="" disabled>Select Department Name</option>
                                        <option  v-for="department in this.alldepartment"
                                              v-bind:value="department.departmentName"
                                              :key="department.departnmentid">{{department.departmentName}}</option>
                                              </select>
                                              </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Client Name:</label>
                                    <select name="" id="" class="form-select rounded-0" required v-model="this.formdata.clientName"  style="background-color: #f5f5f5;font-family: inter;font-size: 15px;color: gray;">
                                        <option value="" disabled>Select ClientName</option>
                                         <option  v-for="client in this.allcustomers"
                                              v-bind:value="client.companyName"
                                              :key="client.customerId">{{client.companyName}}</option>
                                              </select>
                                              </div>
                                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Item Name:</label>
                                    <select name="" id="s" class="form-select rounded-0" required v-model="this.formdata.itemName"  style="background-color: #f5f5f5;font-family: inter;font-size: 15px;color: gray;">
                                        <option value="" disabled>Select ItemName</option>
                                        <option  v-for="stock in this.allstockitems"
                                              v-bind:value="stock.itemName"
                                              :key="stock.id">{{stock.itemName}}</option>
                                              </select>
                                              </div>
                    </div>
                                        <div class="col-md-6">
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Purpose:</label>
                                <input 
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5;height: 36px;"
                                 v-model="this.formdata.purpose"
                                />
                                              </div>
                    </div>
                    </div>
                          

                            <div class=" form-group">
                              <label style="font-family: inter;font-size: 16px;">Description</label>
                              <div class="input-group">
                                <textarea
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                  placeholder="Describe the item here......."
                                 v-model="this.formdata.Description"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-group" style="margin-top: 10px;">
                              <input @click.prevent="AddingInvoice()"
                                type="submit"
                               
                                class="btn btn-success btn-sm"
                                value="Save"
                                form="purchaseForm"
                                style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
                             
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

              
                <div class="table-wrapper"  >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <div class="search-container" style="margin-top: 30px; display: flex; align-items: center;">
    <p style="margin-right: 10px;margin-top: 10px;">Search:</p>
    <input type="text" v-model="search" id="table-search" placeholder="Search...">

  </div>
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                            <th style="width: 180px;">Order No.</th>
                          <th style="width: 120px">Item Name</th>
                          <th style="width: 80px">Quantity</th>
                          <th style="width: 150px">Stock Need</th>
                          <th style="width: 120px">Client Name</th>
                          <th style="width: 120px">Purpose</th>
                          <th style="width: 120px">Department Name</th>
                          <th style="width: 120px">Requisitioner</th>
                          <th style="width: 120px">Status</th>

                         
                        </tr>
                      </thead>
                      <tbody v-for="invoice in filteredBrands" v-bind:key="invoice.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; " @click.prevent="
                            editinvoiceitem(
                             invoice
                            )">
                          <td scope="row" style="" class="text-uppercase">
    <a href="" style="text-decoration: none; color: rgb(202, 36, 7);font-weight: bold;">{{invoice.orderNumber }}</a>
                          </td>

                          <td>{{invoice.brandName}} {{ invoice.itemName }}</td>
                          <td>{{invoice.quantity}}</td>
                          <td>{{invoice.stockNeed}}</td>
                          <td>{{invoice.clientName}}</td>
                          <td>{{invoice.purpose}}</td>
                          <td>{{invoice.department}}</td>
                          <td>{{invoice.requisitioner}}</td>
                          <td :style="getStatusStyle(invoice)" style="font-size:13px">{{invoice.approvedStatus}} |<span    :style="getDispatchStatus(invoice)" style="font-size: 12px;">{{ invoice.dispatchStatus }}</span>     <br v-if="invoice.approvedStatus === 'Rejected'">
    <span v-if="invoice.approvedStatus === 'Rejected'" style="color:black;font-size:12px">{{ invoice.rejectReason }}</span>
 
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
import AppMixins from "../../Mixins/shared"
import moment from 'moment';
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: "ApplyRequisitionForm",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice:[],
      invoiceBody:[],
      userbody: {},
      invoiceNumber:"",
      searchword:"",
      showallstock:true,
      showallstocksearch:false,
      allstockitems:{},
      alldepartment:{},
      allusers:{},
      allcustomers:{},
      allbrands:{},
      emailFormBody:{},
      search:'',
      datearea: false,
      formdata: {
        stockNeed:"",
        itemName:"",
        quantity:"",
        deviceRepaired:"",
        departmentName:"",
        clientName:"",
        purpose:"",
        Description:"",
        brandName:"",

        
        

    
      },
    };
  },
  computed: {
  filteredBrands() {
    return this.emailFormBody.filter((invoice) =>
    invoice.orderNumber.toLowerCase().includes(this.search.toLowerCase())|| invoice.itemName.toLowerCase().includes(this.search.toLowerCase())|| invoice.stockNeed.toLowerCase().includes(this.search.toLowerCase())|| invoice.dispatchStatus.toLowerCase().includes(this.search.toLowerCase())|| invoice.approvedStatus.toLowerCase().includes(this.search.toLowerCase())
    );
  },
},

  methods: {
    async GetAllBrands(){

const response= await this.gettingAllBrands();
this.allbrands=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.allbrands);
return response;

},
getStatusStyle(invoice){
  if(invoice.approvedStatus==="Approved"){
    return{
      color:"green"
    };
  }else if(invoice.approvedStatus==="Issued"){
    return{
      color:"blue"
    };

  }else if(invoice.approvedStatus==="Rejected"){
    return{
      color:"red"
    };

  }
  else if(invoice.approvedStatus==="Pending"){
    return{
      color:"orange"
    };
  }else{
    return "";
  }
},
getDispatchStatus(invoice) {
        if (invoice.dispatchStatus === "Complete") {
          return {
            color: "green",
          };
        } else if (invoice.dispatchStatus === "Incomplete") {
          return {
            color: "red",
          };
        } else {
          return "";
        }
      },
        async editinvoiceitem(invoice) {
  if (invoice.approvedStatus === "Issued") {
    console.log("Navigating to edit page for:", invoice);
     this.$router.push({
          path: `/stockissuebyid/${invoice.id}`,
      replace: true,
    });
  } 
      } ,
    async GetAllInvoice(){

const response= await this.GettingRequisiotin();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;

},
async GetAllCustomers(){

const response= await this.gettingAllCustomers();
this.allcustomers=response.body;





console.log("allcustomers: ", this.allcustomers);
return response;

},
async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${poNumber}`,
        replace: true,
      });
    },
  
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    getFormattedDate(date) {
            return moment(date).format("YYYY-MM-DD")
        },
async editInvoice(invoiceNumber) {
      console.log("Invoice Number is:", invoiceNumber);
      this.$router.push({
        path: `/invoiceItems/${invoiceNumber}`,
        replace: true,
      });
    },
    async AddingInvoice() {
  
        var body={
            itemName:this.formdata.itemName,
            brandName:this.formdata.brandName,
            description:this.formdata.Description,
            stockNeed:this.formdata.stockNeed,
            quantity:this.formdata.quantity,
            deviceBeingRepaired:this.formdata.deviceRepaired,
            clientName:this.formdata.clientName,
            department:this.formdata.departmentName,
            purpose:this.formdata.purpose,


        

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.applyingForm(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        await this.GetAllInvoice();
this.$router.push({
  path: "/apply" ,  
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
        
   
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      }
      this.GetAllInvoice();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async GetAllStockItemss(){

const response= await this.GettingAllStockItems();
this.allstockitems=response.body;
console.log("allstockitems: ", this.allstockitems);
return response;

},
async getAllDepartment(){
  const response= await this.GettingAllDepartment();
   this.alldepartment=response.body;

   
   console.log("alldepartment: ", this.alldepartment);
  return response;

},
async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response.body;
      console.log("allusers: ", this.allusers);
      return response;
    },
    async gettingemailbyid() {
      
      const response = await this.getFormbyemail();
      this.emailFormBody = response.body;

      console.log(
        "_________________________form body is    ____+_______________________: ",
        response.body
      );

      console.log("form body with id >>>>>>>>>>>>>>>>: ", this.emailFormBody);
      return response;
    },

  },
  watch: {
  'formdata.stockNeed': function(newOption) {
    if (newOption === 'Customer Order' || newOption==='Internal Request') {
      this.datearea = false;
    } else {
      this.datearea = true;
    }
  },
},

created() {
  this.invoiceNumber = this.$route.params.invoiceNumber;
  console.log("ItemId :", this.invoiceNumber);
  this.GetAllInvoice();
  this.GetAllSuppliers();
  // this.GetLoggedInUser();
  this.GetAllStockItemss();
  this.getAllDepartment();
  this.getallusers();
  this.GetAllCustomers();
  this.GetAllBrands();
  this.gettingemailbyid();
},
mounted() {
  // Initialize DataTable after the component is mounted and the table is in the DOM
  this.gettingemailbyid().then(() => {
    this.$nextTick(() => {
      const dataTable = $('#purchaseList'); // Get a reference to the table element
      
      // Initialize DataTable with your desired options
      dataTable.DataTable({
        paging: true,  // Enable paging
        pageLength: 10,
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
 
};
</script>
<style>
.modal-mask {
    background-color: rgba(0, 0, 0, .5);
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
