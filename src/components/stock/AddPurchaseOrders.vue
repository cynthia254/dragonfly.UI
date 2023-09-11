<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

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

             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Update Batch</a></li>
           
            </ul>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Approvals</a>
           <ul>
            
            <li><a href="/PoPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval Of PO-Capture Level</a></li>
            
             <li>
               <a href="/batchreview" style="font-size: 16px;font-family:inter;font-weight:medium">Approval Of Batch</a>
             </li>
             <li>
               <a href="/deliveryPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval of PO-Delivery Level</a>
             </li>
             
          
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
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Purchase Order</li>
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
                          PURCHASE ORDER LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 170px;
                            margin-left: 200%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Add Purchase Order</h2>
              
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
                        style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 95px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Purchase Orders
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
                          <form  id="purchaseForm" ref="myForm">
                          

                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">PO Number</label>
                              <div class="input-group">
                                <input 
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 v-model="this.formdata.poNumber"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">PO Date</label>
                              <div class="input-group">
                                <input 
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                  v-model="this.formdata.poDate"
                                 
                                />
                              </div>
                            </div>
                           
                            <div class="form-group">
                                <label style="font-family: inter;font-size: 16px;">Supplier Name</label>
                                    <select name="supplierid" id="supplierid" class="form-select rounded-0" required v-model="this.formdata.supplierName"  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;">
                                        <option value="">Select Supplier</option>
                                        <option  v-for="supplier in this.allsuppliers"
                                              v-bind:value="supplier.supplierName"
                                              :key="supplier.supplierId">{{supplier.supplierName}}</option>
                                              </select>
                    </div>

                            <div class="form-group" style="margin-top: 20px;">
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
                  <div class="col-sm-6 d-flex mt-2">
                    <div
    class="search"
    style="margin-left: 450px; margin-top: 5px; display: flex"
  >
 
    <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder=" Search PO Here"
      style="width: 280px;text-align: center;height:40px;"
      v-model="searchword"
     
    />
   
  </div>
               </div>
                </div>

              
                <div class="table-wrapper" v-if="showallstock"  >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                            <th style="width: 100px">PO ID</th>
                          <th style="width: 80px">PO Number</th>
                          <th style="width: 90px">PO Date</th>
                          <th style="width: 100px">Supplier Name</th>
                          <th style="width: 120px">Date Updated</th>
                          <th style="width: 80px">Capture Status</th>
                          <th style="width: 80px">Delivery Status</th>
                         
                        </tr>
                      </thead>
                      <tbody  v-for="(invoice, index) in this.allinvoice" :key="invoice.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; "  >
                          <th scope="row"   ><a href="" style="text-decoration: none;color: gray;">{{index+1 }}</a></th>
                          <td>
                          <span @click="ModalOpen(invoice)" class="link-button d-flex" style="font-size:13px">{{ invoice.poNumber }}</span>
     
     <transition name="modal">
       <div id="purchaseModal" class="modal-mask fixed-top" v-if="isModalOpen">
         <div class="modal-wrapper" style="vertical-align: middle; display: table-cell; text-align: right;">
           <div class="modal-dialog" style=" margin-top: 10px; margin-right: 600px;">
             <div class="modal-content" style="margin-top: 100px; padding: 20px; background: #fff; border-radius: 5px; width: 30%; position: relative; transition: all 5s ease-in-out;">
             
               
                       <div class="modal-header">
                      
                         <button
                           @click="isModalOpen = false"
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
                           margin-left: 10px;
                         "
                       >
                       <h2 style="display: flex;">{{ selectedInvoice.poNumber }}</h2>
          
           <div class="content">
             Thank you for popping me out    <span @click="viewMore(invoice)" class="link-button d-flex" style="font-size:13px;margin-left:30px">View More</span>
          
           </div>
                       </div>
                     </div>
                   </div>
                 
               </div>
               </div>
             </transition>
                       
                                   </td>
                          <td @click.prevent="pushPO(invoice.poNumber)">{{ getFormattedDate(invoice.poDate) }}</td>
                         
                          <td @click.prevent="pushPO(invoice.poNumber)">{{invoice.vendor}}</td>
                          <td @click.prevent="pushPO(invoice.poNumber)">{{ formatDate(invoice.dateCreated) }}</td>
                          <td :style="getStatusStyle(invoice)" style="font-size:14px" @click.prevent="pushPO(invoice.poNumber)">{{ invoice.captureStatus }}</td>
                          <td :style="getDeliveryStatus(invoice)" style="font-size:14px" @click.prevent="pushPO(invoice.poNumber)">{{ invoice.deliveryStatus }}</td>
                          
                         
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
              <div class="table-wrapper" v-if="showallstocksearch"   >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                            <th style="width: 100px">PO ID</th>
                          <th style="width: 80px">PO Number</th>
                          <th style="width: 90px">PO Date</th>
                          <th style="width: 100px">Supplier Name</th>
                          <th style="width: 120px">Date Updated</th>
                          <th style="width: 80px">Capture Status</th>
                          <th style="width: 80px">Delivery Status</th>
                         
                        </tr>
                      </thead>
                      <tbody  v-for="(invoice, index) in this.allinvoice" :key="invoice.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; ">
                          <th scope="row"   ><a href="" style="text-decoration: none;color: gray;">{{index+1 }}</a></th>
                          <td>
                          <span @click="ModalOpen(invoice)" class="link-button d-flex" style="font-size:13px">{{ invoice.poNumber }}</span>
     
     <transition name="modal">
       <div id="purchaseModal" class="modal-mask fixed-top" v-if="isModalOpen">
         <div class="modal-wrapper" style="vertical-align: middle; display: table-cell; text-align: right;">
           <div class="modal-dialog" style=" margin-top: 10px; margin-right: 600px;">
             <div class="modal-content" style="margin-top: 100px; padding: 20px; background: #fff; border-radius: 5px; width: 30%; position: relative; transition: all 5s ease-in-out;">
             
               
                       <div class="modal-header">
                      
                         <button
                           @click="isModalOpen = false"
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
                           margin-left: 10px;
                         "
                       >
                       <h2 style="display: flex;">{{ selectedInvoice.poNumber }}</h2>
          
           <div class="content">
             Thank you for popping me out    <span @click="viewMore(invoice)" class="link-button d-flex" style="font-size:13px;margin-left:30px">View More</span>
          
           </div>
                       </div>
                     </div>
                   </div>
                 
               </div>
               </div>
             </transition>
                       
                                   </td>
                          <td @click.prevent="pushPO(invoice.poNumber)">{{ getFormattedDate(invoice.poDate) }}</td>
                         
                          <td @click.prevent="pushPO(invoice.poNumber)">{{invoice.vendor}}</td>
                          <td @click.prevent="pushPO(invoice.poNumber)">{{ formatDate(invoice.dateCreated) }}</td>
                          <td :style="getStatusStyle(invoice)" style="font-size:14px" @click.prevent="pushPO(invoice.poNumber)">{{ invoice.captureStatus }}</td>
                          <td :style="getDeliveryStatus(invoice)" style="font-size:14px" @click.prevent="pushPO(invoice.poNumber)">{{ invoice.deliveryStatus }}</td>
                          
                         
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
export default {
  name: 'PurchaseOrdered',
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
      isModalOpen:false,
      selectedInvoice: null,
      formdata: {
        poDate:"",
        poNumber:"",
        vendor:"",
        

    
      },
    };
  },
  methods: {
    ModalOpen(invoice) {
  console.log("ModalOpen called with", invoice);
  this.selectedInvoice = invoice;
  this.isModalOpen = true;
},
    formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },
    async GetAllInvoice(){

const response= await this.gettingAllPurchaseOrderss();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;

},
async searchPO() {
      this.showallstock = false;
      this.showallstocksearch = true;
      var resp = await this.SearchingPO(this.searchword);
      this.allinvoice = resp.body;
      console.log("search  return body: ", resp.body);
    },
  
async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/PoItemLines/${poNumber}`,
        replace: true,
      });
    },
  
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
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
          poDate:this.formdata.poDate,
          poNumber:this.formdata.poNumber,
          vendor:this.formdata.supplierName,

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.addingPurchaseDetailss(body);
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
      this.$router.push({
  path: "/purchaseordered" ,  
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
      this.GetAllInvoice();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async viewMore(invoice) {
    console.log("Navigating to edit page for:", invoice);
    console.log(" ____________________________________________*****************is______________***********:", invoice);
        this.$router.push({
          path: `/viewPOPage/${this.selectedInvoice.poNumber}`,
          replace: true,
        });
    
  },
getStatusStyle(invoice){
  if(invoice.captureStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(invoice.captureStatus==="Incomplete"){
    return{
      color:"red"
    };
    
  }
  else if(invoice.captureStatus==="Pending"){
    return{
      color:"orange"
    };
  }else{
    return "";
  }
},
getDeliveryStatus(invoice){
  if(invoice.deliveryStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(invoice.deliveryStatus==="Incomplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},


  },
  
  created(){
    this.invoiceNumber = this.$route.params.invoiceNumber;
        console.log("ItemId :", this.invoiceNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.GetLoggedInUser();
  },
 
  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchPO();
      } else {
        this.GetAllInvoice();
      }
    },
  },
};
</script>
<style>
.modal-mask {
    background-color: #fff(0, 0, 0, .5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: fixed;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10000;
}

.fade-enter-active, .fade-leave-active,
.pop-enter-active, .pop-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to,
.pop-enter, .pop-leave-to {
  opacity: 0;
}
</style>
