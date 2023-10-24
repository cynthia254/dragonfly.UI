<template style="background-color:white">
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
       
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css"/>
<div v-if="showtickets">
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
            
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Items To Be Issued List</li>
        
          </ol>
        </nav>
      </div>
    </div>
    <div class="table-wrapper  bg-danger">
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
                         ITEMS TO BE ISSUED  LIST
                        </h2>
                      </div>
                
              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >

    
              <div class="row mx-5">
                 
                </div>

              
                <div class="table-wrapper"  >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive table-bordered">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 14px !important;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                            <th style="width: 50px">ID</th>
                          <th style="width: 120px;font-size: 13px;">Item Name</th>
                          <th style="width: 80px;  font-size: 13px;">Quantity Ordered</th>
                          <th style="width: 80px;font-size: 13px;">Quantity Dispatched</th>
                          <th style="width: 90px;font-size: 13px;">Outstanding Balance</th>
                          <th style="width: 120px;font-size: 13px;">Client Name</th>
                          <th style="width: 120px;font-size: 13px;">Purpose</th>
                          <th style="width: 120px;font-size: 13px;">Department Name</th>
                          <th style="width: 120px;font-size: 13px;">Requisitioner</th>
                          <th style="width: 120px;font-size: 13px;">Status</th>

                         
                        </tr>
                      </thead>
                      <tbody  v-for="(invoice, index) in this.allinvoice" :key="invoice.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; "  >
                          <th scope="row" @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )"><a href="" style="text-decoration: none;color: gray;">{{index+1 }}</a></th>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.brandName}} {{ invoice.itemName }}</td>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.quantity}}</td>
                              <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.quantityDispatched}}</td>
                                <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.outStandingBalance}}</td>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.clientName}}</td>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.purpose}}</td>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.department}}</td>
                          <td @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.requisitioner}}</td>
                          <td :style="getStatusStyle(invoice)" style="font-size:12px" @click.prevent="
                            editinvoiceitem(
                              invoice.id,
                            )">{{invoice.approvedStatus}}|{{ invoice.dispatchStatus }}</td>
                    
                          
                         
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
  </div>
  <div class="mx-4" v-if="acessdenied">
    <body>
      <div class="box">
        <div class="head">
          <div class="eyer"></div>
          <div class="eyel"></div>
          <div class="smile"></div>
        </div>
        <div class="handr1"></div>
        <div class="handr2"></div>
        <div class="handl1"></div>
        <div class="handl2"></div>
        <div class="body1"></div>
        <div class="body"></div>
        <div class="legr"></div>
        <div class="legl"></div>
        <div class="feetr"></div>
        <div class="feetl"></div>
        <h2
          style="
            position: absolute;
            top: 20%;
            right: -50%;
            color: red;
            font-size: 50px;
          "
        >
          403 Forbidden Error
        </h2>
        <p
          style="
            position: absolute;
            top: 40%;
            right: -50%;
            color: red;
            font-size: 20px;
          "
        >
          You don't have permission to access / on this server.
        </p>
        <h1
          style="
            position: absolute;
            top: 20%;
            left: 33%;
            color: black;
            font-size: 50px;
            transform: rotate(-38deg);
            animation: blink 0.8s infinite ease;
          "
        >
          ?
        </h1>
        <p
          style="
            margin-top: 60px;
            margin-right: 200px;
            position: absolute;
            top: 40%;
            right: -50%;
            color: red;
            font-size: 20px;
          "
        >
          <a class="btn btn-danger" href="/stockdashboard">Go Back</a>
        </p>
      </div>
    </body>
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
  name: "IssueStock",
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
      showtickets: false,
      acessdenied: false,
      allcustomers:{},
      allbrands:{},
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
  methods: {
    async GetAllBrands(){

const response= await this.gettingAllBrands();
this.allbrands=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.allbrands);
return response;

},
async adjustStock(id) {
      console.log("Item ID  is:", id);
      this.$router.push({
        path: `/issuingSerial/${id}`,
        replace: true,
      });
    },
   
    async issuingitems(id){
const response= await this.issuingItems(id);
console.log("form body is: ", response);
if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
   
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });

}
},
async editinvoiceitem(id) {
        console.log("Invoice Number is:", id);
        this.$router.push({
          path: `/issuingSerial/${id}`,
          replace: true,
        });
      } ,//else {
        //return swal.fire({
         // heightAuto: false,
         // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
       // });
    //  }
    
getStatusStyle(invoice){
  if(invoice.approvedStatus==="Approved"){
    return{
      color:"green"
    };
  }else if(invoice.approvedStatus==="Waiting For Approval"){
    return{
      color:"blue"
    };

  }else if(invoice.approvedStatus==="Rejected"){
    return{
      color:"red"
    };
  }
  else if(invoice.approvedStatus==="Issued"){
    return{
      color:"blue"
    };
  }
  else if(invoice.dispatchStatus==="Incomplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},
    async GetAllInvoice(){

const response= await this.StatusApproved();
this.allinvoice=response.body;

console.log("invoice response: ", response);
if (response.isTrue==true) {
        this.acessdenied = false;
        this.showtickets = true;
        this.alltickets = response.body;
        console.log("All tickets:", this.allinvoice);
      } else {
        this.acessdenied = true;
        this.showtickets = false;
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }



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

  },
  
  created(){
    this.invoiceNumber = this.$route.params.invoiceNumber;
        console.log("ItemId :", this.invoiceNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
   this.GetLoggedInUser();
    this.GetAllStockItemss();
    this.getAllDepartment();
    this.getallusers();
    this.GetAllCustomers();
    this.GetAllBrands();
  },
  mounted() {
  // Initialize DataTable after the component is mounted and the table is in the DOM
  this.GetAllInvoice().then(() => {
    this.$nextTick(() => {
      const dataTable = $('#purchaseList'); // Get a reference to the table element
      
      // Initialize DataTable with your desired options
      dataTable.DataTable({
        paging: true,
        searching: true,
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
