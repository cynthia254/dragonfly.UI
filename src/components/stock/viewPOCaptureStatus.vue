<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>

<head>
   <!-- Required meta tags -->
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
       integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <title>Simple Profile</title>
</head>

<body>
   <section class="my-5">
       <div class="container">
           <div class="main-body">
               <div class="row">
                   <div class="col-lg-4">
                       <div class="card">
                           <div class="card-body" style="border-style: none;">
                               <div class="d-flex flex-column align-items-center text-center" style="" >
                                   <div class="mt-3">
                                       <h4 style="font-size: 30px;font-weight: bold;color: black;">{{this.id}}</h4>
                           
                                   </div>
                                   <button class="movebtn movebtnsu"  style="margin-top: 20px;margin-left: 0px;width:30%;font-family: inter;font-size: 13px;" >
        <router-link to="/PoPending" style="color: black;">  Back</router-link></button
      >
                                   
                               </div>
                            
                           </div>
                       </div>
                   </div>
                   <div class="col-lg-8">
                       <div class="card">
                           <div class="card-body">
                               <div class="row">
                               <div class="top-status col-lg-4 ">
                                   <h5 style="color:red;font-weight: bold;">{{this.invoiceItemBody.poNumber}}</h5>
                                   <ul>
                                       <li class="active">
                                           <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                                               viewBox="0 0 512 512" width="50" height="50">
                                               <title> Clock Delivery package </title>
                                               <path
                                                   d="M316.96,424.4A96,96,0,1,1,400,472.22,95.391,95.391,0,0,1,316.96,424.4Z"
                                                   style="fill:#6fe3ff" />
                                               <path
                                                   d="M400,135.55V280.22A96.008,96.008,0,0,0,316.96,424.4L208,487.3V246.38L399.98,135.54Z"
                                                   style="fill:#c16752" />
                                               <polygon
                                                   points="208 246.38 141.14 207.78 333.13 96.94 399.98 135.54 208 246.38"
                                                   style="fill:#e48e66" />
                                               <polygon
                                                   points="333.13 96.94 141.14 207.78 92.21 179.53 284.19 68.69 333.13 96.94"
                                                   style="fill:#e5d45a" />
                                               <polygon
                                                   points="208 24.7 284.19 68.69 92.21 179.53 92.2 179.53 16.02 135.54 208 24.7"
                                                   style="fill:#af593c" />
                                               <polygon
                                                   points="208 246.38 208 487.3 16 376.45 16 135.55 16.02 135.54 92.2 179.53 92.2 339.28 115.45 329.68 140.8 358.48 140.8 207.98 141.14 207.78 208 246.38"
                                                   style="fill:#e48e66" />
                                               <polygon
                                                   points="141.14 207.78 140.8 207.98 140.8 358.48 115.45 329.68 92.2 339.28 92.2 179.53 92.21 179.53 141.14 207.78"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M284.75,269.594l-17.9-18.959a7,7,0,0,0-11.256,1.49l-16.9,31.44a7,7,0,0,0,6.16,10.316,7.185,7.185,0,0,0,6.292-3.687L255,283.247V343.42a7,7,0,1,0,14,0V273.051l5.69,6.154a6.927,6.927,0,0,0,9.835.285A7,7,0,0,0,284.75,269.594Z"
                                                   style="fill:#6fe3ff" />
                                               <path
                                                   d="M40.83,378.37a7,7,0,0,1-7-7V345.45a7,7,0,0,1,14,0v25.92A7,7,0,0,1,40.83,378.37Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M69.25,395a7,7,0,0,1-7-7V364.65a7,7,0,0,1,14,0V388A7,7,0,0,1,69.25,395Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M97.68,411.41a7,7,0,0,1-7-7V383.85a7,7,0,0,1,14,0v20.56A7,7,0,0,1,97.68,411.41Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M126.1,427.82a7,7,0,0,1-7-7V403.05a7,7,0,0,1,14,0v17.77A7,7,0,0,1,126.1,427.82Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M154.52,444.61a7,7,0,0,1-7-7V422.25a7,7,0,0,1,14,0v15.36A7,7,0,0,1,154.52,444.61Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M247.777,384.941a7,7,0,0,1-3.507-13.064l31.89-18.41a7,7,0,0,1,7,12.125L251.27,384A6.964,6.964,0,0,1,247.777,384.941Z"
                                                   style="fill:#f8ec7d" />
                                               <path
                                                   d="M432.039,413.22a6.975,6.975,0,0,1-4.783-1.89l-32.04-30A7,7,0,0,1,393,376.22V313.97a7,7,0,0,1,14,0v59.215l29.824,27.925a7,7,0,0,1-4.785,12.11Z"
                                                   style="fill:#2561a1" />
                                           </svg>
                                           <span>{{this.poBody.captureStatus}}</span>
                                       </li>
                                      
                                   </ul>
                               </div>
                               <div class="col-lg-8" style="font-family: inter;">
                                   <h4 style="font-weight: bold;">PO Date:    <span style="font-size: 19px;font-weight: lighter;">{{ getFormattedDate(this.poBody.poDate) }}</span></h4>
                                  
                                   <h4 style="font-weight: bold;">Supplier Name:   <span style="font-size: 19px;font-weight: lighter;">{{ this.poBody.vendor }}</span></h4>
                                   <h4 style="font-weight: bold;">Capture Status:    <span style="font-size: 19px;font-weight: lighter;color:orange">{{ this.poBody.captureStatus }}</span></h4>
                                 
                                   <h4 style="font-weight: bold;">Delivery Status:    <span style="font-size: 19px;font-weight: lighter;color:red">{{ this.poBody.deliveryStatus }}</span></h4>
                                 
                                   <h4 style="font-weight: bold;">Date Created:  <span  style="font-size: 19px;font-weight: lighter;font-family:inter">{{ formatDate(this.poBody.dateCreated) }}</span></h4>
                               </div>
                           </div>
                              
                           </div>
                       </div>
                       <div class="card mt-4">
                            <div class="card-body p-0 table-responsive table-bordered">
                                <h4 class="p-3 mb-0">Product Description</h4>
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="font-size:12px;font-weight:bold">Description</th>
                                          
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Delivery Status</th>
                                            <th scope="col">Warranty</th>
                                            <th scope="col">Total Delivered</th>
                                            <th scope="col">Total Closed</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(invoice) in this.invoiceItemBody" :key="invoice.id" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  " >

                                            <td>{{ invoice.brandName }} {{ invoice.itemName }}</td>
                                            <td><strong>{{invoice.quantity}}</strong></td>
                                            <td><span class="badge badge-danger">{{invoice.productStatus}}</span></td>
                                       <td>{{ invoice.warranty }}</td>
                                       <td>{{ invoice.totalDelivered }}</td>
                                       <td>{{ invoice.outstandingQuantity }}</td>
                                          </tr>
                                        <tr v-for="(invoice) in this.invoiceItemBody" :key="invoice.id" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  " >

                                            <th colspan="2">
                                                <span>Outstanding Quantity:  </span>
                                                <span class="">{{invoice.outstandingQuantity}}</span>
                                            </th>
                                            <td >
                                                <span class="text-muted">Unit Price  </span><br>
                                                <strong>{{ invoice.currency }}<br>{{ invoice.unitPrice }}</strong>
                                            </td>
                                            <td>
                                                <span class="text-muted">Total Price  </span>
                                                <strong>{{invoice.currency}}<br>{{ invoice.totalUnitPrice }}</strong>
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
                       
                       
       
   </section>

  
</body>

</template>
<script>
import swal from "sweetalert2";
 import AppMixins from "../../Mixins/shared";
 import moment from "moment";
 export default {
   name: "viewPOCaptureStatus",
   mixins: [AppMixins],
   data() {
     return {
       showModal: false,
       allinvoice: [],
       invoiceBody: [],
       userbody: {},
       showModalOnHover: false,
     hoveredRowIndex: -1,
       invoiceNumber: "",
       searchword: "",
       poBody:[],
       showallstock: true,
       showallstocksearch: false,
       isModalOpen:false,
       allstockitems: {},
       alldepartment: {},
       allusers: {},
       allcustomers: {},
       allbrands: {},
       showtickets: false,
       batchbody:{},
       acessdenied: false,
       selectedInvoice: null,
       invoiceItemBody:{},
       formdata: {
         stockNeed: "",
         itemName: "",
         quantity: "",
         deviceRepaired: "",
         departmentName: "",
         clientName: "",
         purpose: "",
         Description: "",
         brandName: "",
       },
     };
   },
   methods: {
     openModal(invoiceitem) {
     this.selectedInvoice = invoiceitem;
     this.showModal = true;
   },
   async gettingitembyinvoice() {
      var response = await this.gettingitemsinPO(this.id);
      this.invoiceItemBody = response.body;
      console.log("response on invoice body: ", this.invoiceItemBody);
    },
    async getitngpoWithPONumber() {
  try {
    var response = await this.gettingdetailsbypo(this.id);
    this.poBody = response.body;
    console.log("response on po body: ", this.poBody);
  } catch (error) {
    console.error("Error fetching PO details:", error);
  }
},
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
  
   
   ModalOpen(invoiceitem) {
 console.log("ModalOpen called with", invoiceitem);
 this.selectedInvoice = invoiceitem;
 this.isModalOpen = true;
},


   async AddingInvoice() {
       var body = {
         rejectedReason: this.formdata.reason,
         selectedOption: this.formdata.selectedOption,
         batchNumber: this.selectedInvoice.batchNumber,
       };
 
       console.log("Invoice new:>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", body);
       var response = await this.BatchReviewStatus(body);
       if (response.isTrue == true) {
         swal.fire({
           heightAuto: false,
           html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
         });
this.$router.push({
 path: "/batchreview" ,  
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
       
     
     },
     
     async GetAllBrands() {
       const response = await this.gettingAllBrands();
       this.allbrands = response.body;
 
       console.log("Brands response: ", response);
 
       console.log("allbrands: ", this.allbrands);
       return response;
     },
     async adjustStock(invoiceitem) {
    
    console.log(" ____________________________________________*****************is______________***********:", invoiceitem);
    this.$router.push({
      path: `/approversBatch/${invoiceitem.batchNumber}`,
      replace: true,
    });

},
async PushPO() {
    
    console.log(" ____________________________________________*****************is______________***********:", );
    this.$router.push({
      path: `/adddelivery/${this.allinvoice.itemID}`,
      replace: true,
    });

},
     async issuingitems(id) {
       const response = await this.issuingItems(id);
       console.log("form body is: ", response);
       if (response.isTrue == true) {
         swal.fire({
           heightAuto: false,
           html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
         });
         this.$refs.myForm.reset();
         await this.GetAllInvoice();
       } else {
         swal.fire({
           heightAuto: false,
           html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
         });
       }
     },
     async GetAllInvoice() {
       const response = await this.GetBatchStatusComplete();
       this.allinvoice = response.body;
       console.log("All status:::::::::::::::::::::;",this.allinvoice);
 
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
     async GetAllCustomers() {
       const response = await this.gettingAllCustomers();
       this.allcustomers = response.body;
 
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
 
     formatDate(dateString) {
       const date = new Date(dateString);
 
       return date.toLocaleDateString() + " " + date.toLocaleTimeString();
     },
     formatDateAssigned(value) {
       let formattedDate = new Date(value);
       formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
       return formattedDate;
     },
     getFormattedDate(date) {
       return moment(date).format("YYYY-MM-DD");
     },
     async editInvoice(invoiceNumber) {
       console.log("Invoice Number is:", invoiceNumber);
       this.$router.push({
         path: `/invoiceItems/${invoiceNumber}`,
         replace: true,
       });
     },
   
     async GetAllSuppliers() {
       const response = await this.gettingAllSuppliers();
       this.allsuppliers = response.body;
       console.log("allsuppliers: ", this.allsuppliers);
       return response;
     },
     async GetAllStockItemss() {
       const response = await this.GettingAllStockItems();
       this.allstockitems = response.body;
       console.log("allstockitems: ", this.allstockitems);
       return response;
     },
     async getAllDepartment() {
       const response = await this.GettingAllDepartment();
       this.alldepartment = response.body;
 
       console.log("alldepartment: ", this.alldepartment);
       return response;
     },
     async getallusers() {
       const response = await this.GettingAllUsers();
       this.allusers = response.body;
       console.log("allusers: ", this.allusers);
       return response;
     },
     getStatusStyle(invoiceitem){
 if(invoiceitem.itemStatus==="Okay"){
   return{
     color:"green"
   };
 }else if(invoiceitem.itemStatus==="Faulty"){
   return{
     color:"red"
   };
 }
 else {
   return{
     color:"orange"
   };
 }
},
   },
 
   created() {
     this.invoiceNumber = this.$route.params.invoiceNumber;
     console.log("ItemId :", this.invoiceNumber);
     this.id = this.$route.params.id;
       console.log("batchnumber :", this.id);
       this.gettingitembyinvoice();
       this.getitngpoWithPONumber();
     this.GetAllInvoice();
     this.GetAllSuppliers();
     this.GetLoggedInUser();
     this.GetAllStockItemss();
     this.getAllDepartment();
     this.getallusers();
     this.GetAllCustomers();
     this.GetAllBrands();
  
   },
 };
 </script>
<style>
.list-group-item.active {
   background: #ffc107;
}
/* end common class */
.top-status ul {
   list-style: none;
   display: flex;
   justify-content: space-around;
   justify-content: center;
   flex-wrap: wrap;
   padding: 0;
   margin: 0;
}
.top-status ul li {
   width: 120px;
   height: 120px;
   border-radius: 50%;
   background: #fff;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   border: 8px solid #ddd;
   box-shadow: 1px 1px 10px 1px #ddd inset;
   margin: 10px 5px;
}
.top-status ul li.active {
   border-color: #ffc107;
   box-shadow: 1px 1px 20px 1px #ffc107 inset;
}
/* end top status */

ul.timeline {
   list-style-type: none;
   position: relative;
}
ul.timeline:before {
   content: ' ';
   background: #d4d9df;
   display: inline-block;
   position: absolute;
   left: 29px;
   width: 2px;
   height: 100%;
   z-index: 400;
}
ul.timeline > li {
   margin: 20px 0;
   padding-left: 30px;
}
ul.timeline > li:before {
   content: '\2713';
   background: #fff;
   display: inline-block;
   position: absolute;
   border-radius: 50%;
   border: 0;
   left: 5px;
   width: 50px;
   height: 50px;
   z-index: 400;
   text-align: center;
   line-height: 50px;
   color: #d4d9df;
   font-size: 24px;
   border: 2px solid #d4d9df;
}
ul.timeline > li.active:before {
   content: '\2713';
   background: #28a745;
   display: inline-block;
   position: absolute;
   border-radius: 50%;
   border: 0;
   left: 5px;
   width: 50px;
   height: 50px;
   z-index: 400;
   text-align: center;
   line-height: 50px;
   color: #fff;
   font-size: 30px;
   border: 2px solid #28a745;
}
/* end timeline */
</style>