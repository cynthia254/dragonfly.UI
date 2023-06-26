<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <section>
            <header class="top">
      <div class="frame-24" style="width: 40px">
      <img
        alt=""
        class="payhouse-logo-1"
        src="https://static.overlay-tech.com/assets/fef105cb-ec3b-4485-a2d5-9b3c5fb2d9f2.png"
      />
    </div>
      <nav style="margin-right: 90px">
        <ul>
          <li>
            <a href="/stock" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Customers</a>
                <ul>
                  <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Customers</a></li>
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

              <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Orders</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Sales Orders</a>
              </li>
              <li><a href="/purchase" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Orders</a></li>
            </ul>
          </li>

          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Reports</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Sales Reports</a>
              </li>
              <li><a href="/purchase" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Reports</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    </section>
  <div class="" style="width: 95%; margin-left: 64px; margin-top: 60px">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb " class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:#FF8C22">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px">Manage Invoice</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);"
                  >
                    <div class="row" >
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: rgb(211, 3, 3);  height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;white-space: nowrap;width: fit-content;">
                          INVOICE LIST
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
                            margin-top: 15px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 25px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter">ADD INVOICE</h2>
              
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
                           
                            Add Invoice
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
                              <label style="font-family: inter;font-size: 16px;">Invoice Date</label>
                              <div class="input-group">
                                <input 
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 v-model="this.formdata.invoiceDate"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">LPO Date</label>
                              <div class="input-group">
                                <input 
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                  v-model="this.formdata.lpoDate"
                                 
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
    style="margin-left: 500px; margin-top: 5px; display: flex"
  >
  <span class="form-control-feedback"><svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
    <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder="   Search"
      style="width: 280px;text-align: center;height:40px;"
     
    />
    <img src="../../assets/images/filter.svg" style="width: 24px;height:24px;position: absolute;margin-left: 250px;margin-top:6px"/>
  
  </div>
               </div>
                </div>

              
                <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 18px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                          <th>Invoice Number</th>
                          <th>Invoice Date</th>
                          <th>LPO Number</th>
                          <th>LPO Date</th>
                          <th>Supplier Name</th>
                          <th>Date Added</th>
                          

                          <th style="width: 120px">Action</th>
                      
                        </tr>
                      </thead>
                      <tbody v-for="invoice in this.allinvoice" v-bind:key="invoice.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;white-space: nowrap; ">
                          <th scope="row"    @click.prevent="editInvoice(invoice.invoiceNumber)"><a href="" style="text-decoration: none;color: gray;">{{invoice.invoiceNumber }}</a></th>
                        
                          <td  @click.prevent="editInvoice(invoice.invoiceNumber)">{{ getFormattedDate(invoice.invoiceDate) }}</td>
                          <td  @click.prevent="editInvoice(invoice.invoiceNumber)">{{invoice.lpoNumber}}</td>
                          <td  @click.prevent="editInvoice(invoice.invoiceNumber)">{{ getFormattedDate(invoice.lpoDate) }}</td>
                          <td  @click.prevent="editInvoice(invoice.invoiceNumber)">{{invoice.supplierName}}</td>
                          <td  @click.prevent="editInvoice(invoice.invoiceNumber)">{{ formatDateAssigned(invoice.stockInDate) }}</td>

                          <td>
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click.prevent="editInvoice(invoice.invoiceNumber)"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="red"
                                  class="bi bi-trash3 mx-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                  />
                                </svg>
                             
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
export default {
  name: "InvoiceDetails",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice:[],
      invoiceBody:[],
      invoiceNumber:"",
      formdata: {
        invoiceDate:"",
        lpoDate:"",
        supplierName:"",
        

    
      },
    };
  },
  methods: {
    async GetAllInvoice(){

const response= await this.gettingInvoice();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;

},
async getitnginvoicebyname() {
      var invoiceNumber=this.invoiceNumber;
      var response = await this.gettinginvoicebynumber(invoiceNumber);
      this.invoiceBody = response.body;
      console.log("response on returnned body: : ", this.invoiceBody);
      //console.log("body returned: ",this.stockBody);

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
          lpoDate:this.formdata.lpoDate,
          invoiceDate:this.formdata.invoiceDate,
          supplierName:this.formdata.supplierName,

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.creatinginvoice(body);
      if (response.isTrue==true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
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
  },
  created(){
    this.invoiceNumber = this.$route.params.invoiceNumber;
        console.log("ItemId :", this.invoiceNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.getitnginvoicebyname();
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
