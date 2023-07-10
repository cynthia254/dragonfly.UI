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
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
          
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a @click.prevent="editInvoice()" href="" style="color:gray">Manage Invoice Lines</a></li>
            
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Product Details</li>
          </ol>
        </nav>
      </div>
    </div>
      <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 71px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;"
                  >
                    <div class="row" >
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem;margin-top: 10px; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                          PRODUCT DETAILS LIST
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
                            margin-top: 15px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            margin-top: 20px;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter">Add Product Details</h2>
              
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
                                  margin-top: 80px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Product Details
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
        <form class=" " ref="myForm">
            <select class="form-control"  v-model="selected_Number"   style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                ">
              <option value=""       style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5">Select Number</option>
                
              <option  v-for="numbererd in this.numbering_body" v-bind:value="numbererd.numberValue" :key="numbererd.productNumberID">{{ numbererd.numberValue }}</option>
     
            </select>
            <div class="form-group">
        <label for="name" style="font-family: inter;font-size: 16px;">Serial Number:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter serial number" v-model="this.formdata.serialNumber"       style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5">
      </div>
      <div class="form-group">
        <label for="" style="font-family: inter;font-size: 16px;">IMEI 1:</label>
        <input type="number" class="form-control" id="" placeholder="Enter IMEI1" v-model="this.formdata.imei1 "       style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5">
      </div>
      <div class="form-group">
        <label for="password" style="font-family: inter;font-size: 16px;">IMEI 2:</label>
        <input type="number" class="form-control" id="" placeholder="Enter IMEI2" v-model="this.formdata.imei2"       style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5">
      </div>
      <div class="form-group" style="margin-top: 20px">
                          <input
                          @click.prevent="CreateItem();"
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
    </div>
    <div class="form-control" style="margin-top:50px;border:0;border-radius: 10px;box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
      <div style="margin-top:100px;">
      <input type="file" @change="handleFileUpload" />
      <button @click.prevent="uploadData">Upload</button>
    </div>
      <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
    <table class=" table table-hover" style="margin-left:40px">
  <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
                        
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Serial Number</th>
      <th>IMEI 1</th>
      <th>IMEI 2</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(invoiceitem,index) in this.invoiceItemBody" :key="invoiceitem.batchID" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
      <th scope="row">{{index +1}}</th>
      <td style="text-transform: uppercase;">{{invoiceitem.serialNumber}}</td>
      <td>{{ invoiceitem.imeI1 }}</td>
      <td>{{ invoiceitem.imeI2 }}</td>
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
  </template>
  
  <script>
  import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import * as XLSX from 'xlsx' ;
  export default {
    name:"invoiceItemAdd",
    mixins: [AppMixins],
    allinvoiceitems:[],
    invoiceNumber:"",
   
    data() {
      return {
        fileData: null,
        batchID:"",
        invoiceItemBody:[],
        userbody: {},
        showModal:false,
        formdata: {
            serialNumber:"",
            imei1:"",
            imei2:"",
        },
        selected_Number:"",
        reference_number:"",
        numbering_body:{},
        productlineBody:[],
      };
    },
    methods:{
        async CreateItem() {

          if(this.selected_Number==""){
            swal.fire({
              html:`<h5 class="text-success">Kindly select the  item number</h5>`});
          }
  
  var body={
    serialNumber:this.formdata.serialNumber,
    imeI2:this.formdata.imei2,
    imeI1:this.formdata.imei1,
    batchID:this.batchID,
    product_No:this.selected_Number,
    reference_Number:this.reference_number



  }
  console.log("Body in adding items______________///______*****_____", body);
 

  

 console.log("Item new: ", body);
var response = await this.addingInvoiceItems(body);
if (response.isTrue==true) {
 
  swal.fire({
    heightAuto: false,
    html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

  });

  
   await this.gettingreferencenumbers();
   await this.$refs.myForm.reset();
    
  
  
 this.gettingproductdetailsbyid();
} else {
  swal.fire({
    heightAuto: false,
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });
 

      }
      this.GetAllInvoiceItems();
    },
    async editInvoice() {
      console.log("Invoice Number is:", );
      this.$router.push({
        path: `/invoiceItems/${this.productlineBody.invoiceNumber}`,
        replace: true,
      });
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
    handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          console.log("data:",data);
          console.log("workbook:",workbook);
          console.log("worksheet:",worksheet);
          console.log("JSON data:",jsonData);
  
          // Extract the relevant fields from jsonData and store them in a suitable format
          this.fileData = jsonData.map(row => ({
            SerialNumber: row[0],
            IMEI1: row[1],
            IMEI2: row[2],
          }));
          this.fileData.forEach(row => {
        console.log(row.SerialNumber);
        console.log(row.IMEI1);
        console.log(row.IMEI2);
          });

          console.log(" form data:    ", this.fileData);
        };
  
        reader.readAsArrayBuffer(file);
      },
    async  uploadData() {
      const body = this.fileData.map(data => ({
      serialNumber: data.SerialNumber,
      imeI1: data.IMEI1,
      imeI2: data.IMEI2,
    }));
        console.log("body:",body);
    
          var resp=await this.uploadingbulk(body);
       

        console.log("This is the bulk body  ____", resp)
      
       
      },
  
    async GetAllInvoiceItems() {
      const response = await this.gettingAllinvoiceitems();
      this.allinvoiceitems = response.body;

      console.log("Brands response: ", response);

      console.log("allinvoiceitems: ", this.allinvoiceitems);
      return response;
    },
    async gettingproductdetailsbyid() {
       var batchID=this.batchID;
       var response = await this.gettingproductbyId(batchID);
       this.invoiceItemBody = response.body;
       console.log("response on invoice body: : ", this.invoiceItemBody);
       //this.reference_number=this.invoiceItemBody.reference_Number;
 
      
},
async gettingproductlineByid() {

       var response = await this.gettingproductlinebyid(this.batchID);
       this.productlineBody = response.body;
       console.log("response on productline body: : ", this.productlineBody);
       //this.reference_number=this.productlineBody.reference_Number;
 
      
},
async gettingreferencenumbers() {
  var resp = await this.gettingproductlinebyid(this.batchID);
       console.log("this is reference no: ", resp.body.reference_Number);
        this.reference_number=resp.body.reference_Number;
       var response = await this.gettingreferenceNumber(this.reference_number);
       this.numbering_body = response.body;
        
       console.log("response on numbering body: : ", this.numbering_body);
 
      
},
    },
    created() {
      this.batchID = this.$route.params.invoiceLineId;
        console.log("ItemId :", this.batchID);
    this.GetAllInvoiceItems();
    this.gettingproductdetailsbyid();
    this.gettingreferencenumbers();
    this.GetLoggedInUser();
    this.gettingproductlineByid();
   
   
  },
  
  };
  </script>
  
  <style>
  /* Add your custom styles here */
 
  </style>
  