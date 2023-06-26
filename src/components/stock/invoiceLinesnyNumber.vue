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
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:#FF8C22">Home</a></li>
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/invoicedetails" style="color:#FF8C22">Manage Invoice</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px">Manage Invoice Items</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: rgb(211, 3, 3);   height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;white-space: nowrap;width: fit-content;">
                          INVOICE ITEMS LIST
                        </h2>
                      </div>
                  
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
              @click="showModal = true"
              type="button"
              name="addPurchase"
              id="addPurchase"
              class="btn btn- btn-sm rounded-0"
              style="
                width: 200px;
                margin-left: 200%;
                margin-top: 10px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;background:#FF8C22;color: white;font-size: 15px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
                style="margin-left: 10%; color: white;"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                /></svg
              >Add InvoiceLines
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
                    style="
                      width: 50%;
                      margin-left: 120px;
                      margin-top: 40px;
                      background: #f5f5f5;
                      border-radius: 18px;
                      height: 100%;
                    "
                  >
                    <div class="modal-header">
                      <h4
                        class="modal-title"
                        style="
                          margin-left: 40px;
                          margin-top: 20px;
                          font-family: inter;
                          font-size: 22px;
                        "
                      >
                        Add InvoiceLines
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
                      <form id="purchaseForm" ref="myForm">
                        <div class="row">
                  
                          <div class="">
                            <div class="form-group">
                              <label style="font-family: inter; font-size: 16px;margin-top: 10px;"
                                >Select Brand</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.brandSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                "
                              >
                                <option value="" selected disabled>
                                  Select Brand
                                </option>
                                <option
                                  v-for="invoice in this.allitems"
                                  v-bind:value="invoice.brandName"
                                  :key="invoice.itemID"
                                >
                                 {{ invoice.brandName }}
                                </option>
                              </select>
                            </div>
                          </div>
                          </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label style="font-family: inter; font-size: 16px;margin-top: 10px;"
                                >Select Item</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.itemSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                  
                                "
                              >
                                <option value="" selected disabled>
                                  Select Item
                                </option>
                                <option
                                  v-for="invoice in this.allitems"
                                  v-bind:value="invoice.itemName"
                                  :key="invoice.itemID"
                                >
                                {{ invoice.brandName }}--{{ invoice.itemName }}
                                </option>
                              </select>
                            </div>
                          </div>
                          
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  margin-top: 10px;
                                "
                                >Quantity</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.Quantity"
                                />
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        <div class="row">
                          
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;margin-top: 10px;
                                "
                                >Warranty In Months</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warranty"
                                />
                              </div>
                            </div>
                          </div>
                        
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;
                                  margin-top: 10px;
                                "
                                >Warranty Start Date</label
                              >
                              <div class="input-group">
                                <input
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warrantStartDate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label
                                id="name-label"
                                for="name"
                                style="font-family: inter; font-size: 16px"
                                >Unit Price</label
                              >
                              <div
                                class="form-inline form-group"
                                style="display: flex"
                              >
                                <select
                                  class="form-control input-sm w-5"
                                  style="
                                    width: 60px;
                                    background-color: #f5f5f5;
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                  "
                                  v-model="this.formdata.currency"
                                >
                                  <option
                                    value=""
                                    selected
                                    disabled
                                    style="margin-top: 30px"
                                  >
                                    KES
                                  </option>
                                  <option value="USD">USD</option>
                                  <option value="KES">KES</option>
                                  <option value="UGX">UGX</option>
                                  <option value="TZ">TZ</option>
                                </select>
                                <input
                                  type="text"
                                  class="form-control"
                                  required
                                  v-model="this.formdata.unitPrice"
                                  style="
                                    background-color: #f5f5f5;
                                    width: 800px;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group" style="margin-top: 20px">
                          <input
                            @click.prevent="AddingInvoiceLines()"
                            type="submit"
                            class="btn btn-success btn-sm"
                            value="Save"
                            form="purchaseForm"
                            style="
                              margin-bottom: 30px;
                              margin-left: 70px;
                              width: 60%;
                              font-family: inter;
                              font-size: 13px;
                            "
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
             <div class="form-control" style="margin-top: 30px;margin-left: 10px;border:0;border-radius: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
              
                <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered" style="overflow:hidden;margin-left:40px">
                      <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
                       
                        <tr >
                          <th>Item ID</th>
                          <th>Item Name</th>
                          <th>Category Name</th>
                          <th>Quantity</th>
                          <th>Warranty</th>
                          <th>Warranty Start Date</th>
                          <th>Warranty End Date</th>
                          <th>Updated By</th>
                          <th>Updated on</th>
                          <th>Status</th>
                          
                      
                        </tr>
                      </thead>
                      <tbody >
                        <tr v-for="(invoicelines,index) in this.invoiceItemBody" :key="invoicelines.invoiceLineId" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
                         
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{index +1}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" style="white-space: nowrap;">{{invoicelines.brandName}} {{ invoicelines.itemName }}</td>
                          <td  @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{ invoicelines.categoryName }}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{invoicelines.quantity}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{invoicelines.warranty}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{getFormattedDate(invoicelines.warrantyStartDate)}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{getFormattedDate(invoicelines.warrantyEndDate)}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" >{{invoicelines.updatedBy}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)" style="white-space: nowrap;">{{formatDateAssigned(invoicelines.updatedOn)}}</td>
                          <td @click.prevent="editinvoiceitem(invoicelines.invoiceLineId)"  :style="getStatusStyle(invoicelines)">{{ invoicelines.status }}</td>
                         
                       
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
  name: 'InvoiceLinesByNumber',
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice: [],
      allitems: [],
      allcategory: [],
      allbatch:[],
      invoiceItemBody:[],
      formdata: {
        InvoiceSelected: "",
        itemSelected: "",
        Quantity: "",
        warranty: "",
        currency: "",
        unitPrice: "",
        brandSelected: "",
        warrantStartDate: "",
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
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
async GetAllCategory() {
      const response = await this.gettingCategory();
      this.allcategory = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allcategory);
      return response;
    },
    async AddingInvoiceLines() {
      var body = {
        brandName: this.formdata.brandSelected,
        quantity: this.formdata.Quantity,
        unitPrice: this.formdata.unitPrice,
        itemName: this.formdata.itemSelected,
        invoiceNumber: this.invoiceNumber,
        currency: this.formdata.currency,
        warranty: this.formdata.warranty,
        warrantyStartDate: this.formdata.warrantStartDate,
      };

      console.log("Invoice new: ", body);
      var response = await this.addingInvoiceLines(body);
      if (response.isTrue == true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        this.gettingitembyinvoice();
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      }
     
    },
    getStatusStyle(invoicelines){
  if(invoicelines.status==="Complete"){
    return{
      color:"green"
    };
  }
  else if(invoicelines.status==="InComplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},

async gettingitembyinvoice() {
       var invoiceNumber=this.invoiceNumber;
       var response = await this.gettinginvoicenumber(invoiceNumber);
       this.invoiceItemBody = response.body;
       console.log("response on invoice body: : ", this.invoiceItemBody);
 
      
},
async editinvoiceitem(invoiceLineId) {
      console.log("Invoice Number is:", invoiceLineId);
      this.$router.push({
        path: `/invoice_item/${invoiceLineId}`,
        replace: true,
      });
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
        path: `/editinvoice/${invoiceNumber}`,
        replace: true,
      });
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
    this.gettingitembyinvoice();
    this.GetAllItems();
    this.GetAllCategory();
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
